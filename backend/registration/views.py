from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Game, Registration
from django.db.models import Q
import json
import pandas as pd  # Import pandas for Excel file creation
from django.utils import timezone
from .models import RegistrationStatus


def register(request, game):
    if request.method == "POST":
        # Get the registration status
        status = RegistrationStatus.objects.first()
        if not status or not status.is_open:
            return JsonResponse({"error": "Registration is closed"}, status=403)

        # Proceed with saving the registration
        try:
            data = json.loads(request.body)
            # Save the registration data (Assume you have a Registration model)
            return JsonResponse({"message": "Registration successful"}, status=201)
        except json.JSONDecodeError:
            return JsonResponse({"error": "Invalid JSON"}, status=400)

    return JsonResponse({"error": "Method not allowed"}, status=405)

@csrf_exempt
def toggle_registration(request):
    if request.method == "POST":
        try:
            # Get the first (only) registration status entry
            status, created = RegistrationStatus.objects.get_or_create(id=1)

            # Toggle the is_open status
            status.is_open = not status.is_open
            status.save()

            return JsonResponse({"isOpen": status.is_open}, status=200)
        except Exception as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Invalid request"}, status=400)

def get_registration_status(request):
    status = RegistrationStatus.objects.first()
    return JsonResponse({"isOpen": status.is_open if status else False})

@csrf_exempt
def get_games(request):
    """
    API to fetch games based on gender, including common games.
    """
    gender = request.GET.get('gender')  # Get gender from query params
    games = Game.objects.filter(Q(gender=gender) | Q(gender='common')).values('id', 'name')
    return JsonResponse(list(games), safe=False)

@csrf_exempt
def register(request, game_name):
    """
    API to handle registration using game name and gender from form data.
    """
    if request.method == 'POST':
        try:
            # Parse JSON data from the request body
            data = json.loads(request.body)
            gender = data.get('gender')  # Get gender from the request body

            # Construct the full game name with gender suffix
            full_game_name = f"{game_name}_{gender}"

            # Fetch the game by full name
            game = Game.objects.get(name=full_game_name)

            # Create a new registration
            registration = Registration.objects.create(
                name=data.get('name'),
                email=data.get('email'),
                enrollment=data.get('enrollment'),
                age=data.get('age'),
                gender=gender,
                department=data.get('department'),
                semester=data.get('semester'),
                game=game  # Associate the registration with the selected game
            )

            # Return success response
            return JsonResponse({
                'status': 'success',
                'message': 'Registration successful!',
                'game': game.name,
                'gender': game.get_gender_display()
            }, status=201)

        except Game.DoesNotExist:
            return JsonResponse({
                'status': 'error',
                'message': f'Game "{full_game_name}" not found!'
            }, status=404)

        except Exception as e:
            return JsonResponse({
                'status': 'error',
                'message': str(e)
            }, status=400)

    return JsonResponse({
        'status': 'error',
        'message': 'Invalid request method. Only POST is allowed.'
    }, status=405)

@csrf_exempt
def get_filtered_registrations(request):
    """
    API to fetch filtered registrations based on department, game, gender, and division.
    """
    # Get filter parameters from the request
    department = request.GET.get('department')
    game_name = request.GET.get('game_name')  # Changed from game_id to game_name
    gender = request.GET.get('gender')
    division = request.GET.get('division')  # Add this field if needed

    # Build the query using Q objects
    query = Q()
    
    if department:
        query &= Q(department=department)
    
    if game_name:
        # Check for both male and female versions of the game
        game_name_male = f"{game_name}_Male"
        game_name_female = f"{game_name}_Female"
        query &= Q(game__name__in=[game_name_male, game_name_female])
    
    if gender:
        query &= Q(gender=gender)
    
    if division:
        query &= Q(division=division)  # Add this field if needed

    # Fetch filtered registrations
    registrations = Registration.objects.filter(query).values(
        'name', 'email', 'enrollment', 'age', 'gender', 'department', 'semester', 'game__name', 'registration_date'
    )

    return JsonResponse(list(registrations), safe=False)

def download_excel(request):
    """
    API to download filtered registrations as an Excel file.
    """
    # Get filter parameters from the request
    department = request.GET.get('department')
    game_name = request.GET.get('game_name')  # Filter by game name
    gender = request.GET.get('gender')

    # Build the query using Q objects
    query = Q()
    
    if department:
        query &= Q(department=department)
        
    if game_name:  # Filter by game name
        query &= Q(game__name__icontains=game_name)  # case-insensitive match on game name
    
    if gender:
        query &= Q(gender=gender)

    # Fetch filtered registrations
    registrations = Registration.objects.filter(query).values(
        'name', 'email', 'enrollment', 'age', 'gender', 'department', 'semester', 'game__name', 'registration_date'
    )

    # Convert queryset to DataFrame
    df = pd.DataFrame(list(registrations))

    # Remove the registration date column
    df = df.drop(columns=['registration_date'])

    # Replace game names (e.g., "football_Female" => "Football")
    df['game__name'] = df['game__name'].str.replace('_', ' ').str.replace(r'(.*)(Male|Female)$', r'\1', regex=True).str.title()

    # Create Excel file in memory
    excel_file = HttpResponse(content_type='application/vnd.ms-excel')
    excel_file['Content-Disposition'] = 'attachment; filename=registrations.xlsx'
    df.to_excel(excel_file, index=False)

    return excel_file


