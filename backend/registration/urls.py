from django.urls import path
from . import views
from .views import get_registration_status
from .views import toggle_registration

urlpatterns = [
    path('get-games/', views.get_games, name='get_games'),
    path('register/<str:game_name>/', views.register, name='register'),
    path('get-filtered-registrations/', views.get_filtered_registrations, name='get_filtered_registrations'),
    path('download-excel/', views.download_excel, name='download_excel'),
     path('api/registration-status/', get_registration_status, name='registration-status'),
     path('api/sports/toggle-registration/', toggle_registration, name='toggle-registration'),
]
