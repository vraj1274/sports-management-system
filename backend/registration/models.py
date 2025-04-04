from django.db import models

class RegistrationStatus(models.Model):
    is_open = models.BooleanField(default=True)

    def __str__(self):
        return "Open" if self.is_open else "Closed"
class Game(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
    ]
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)

    def __str__(self):
        return self.name

class Registration(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    enrollment = models.CharField(max_length=50)
    age = models.IntegerField()
    gender = models.CharField(max_length=10, choices=[('Male', 'Male'), ('Female', 'Female')])
    department = models.CharField(max_length=100)
    semester = models.IntegerField()
    registration_date = models.DateTimeField(auto_now_add=True)
    game = models.ForeignKey(Game, on_delete=models.CASCADE, default=1)     
    def __str__(self):
        return f"{self.name} - {self.game.name}"
