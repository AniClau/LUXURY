from django.db import models
from django.conf import settings

class Cliente(models.Model):
    usuario = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='perfil_cliente')
    rfc = models.CharField(max_length=13, blank=True, null=True, verbose_name="RFC")
    direccion = models.TextField(blank=True, null=True, verbose_name="Dirección")

    def __str__(self):
        return f"{self.usuario.get_full_name()} {self.usuario.apellido_paterno}"
