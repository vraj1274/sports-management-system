from django.contrib import admin
from django.urls import path, include
from registration.views import toggle_registration, get_registration_status


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('registration.urls')),
    path('api/sports/toggle-registration/', toggle_registration, name='toggle-registration'),
    path('api/sports/registration-status/', get_registration_status, name='registration-status'),
]
