from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuario(AbstractUser):
    ADMINISTRADOR = 'Administrador'
    ENCARGADO = 'Encargado'
    CLIENTE = 'Cliente'
    
    ROLES_CHOICES = [
        (ADMINISTRADOR, 'Administrador'),
        (ENCARGADO, 'Encargado'),
        (CLIENTE, 'Cliente'),
    ]

    nombre = models.CharField(max_length=100, verbose_name="Nombre")
    correo = models.EmailField(unique=True, verbose_name="Correo Electrónico")
    apellido_paterno = models.CharField(max_length=100, verbose_name="Apellido Paterno")
    apellido_materno = models.CharField(max_length=100, verbose_name="Apellido Materno", blank=True, null=True)
    telefono = models.CharField(max_length=15, verbose_name="Teléfono", blank=True, null=True)
    rol = models.CharField(max_length=20, choices=ROLES_CHOICES, default=CLIENTE)
    estatus = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.first_name} {self.apellido_paterno} ({self.rol})"
