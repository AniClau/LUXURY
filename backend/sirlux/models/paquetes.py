from django.db import models

class Paquete(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    precio_base = models.DecimalField(max_digits=12, decimal_places=2)
    capacidad_personas = models.IntegerField()
    duracion_horas = models.IntegerField()
    incluye_menu = models.BooleanField(default=True)
    numero_tiempos = models.IntegerField(default=3)
    estado = models.BooleanField(default=True)
    imagen = models.URLField(max_length=500, blank=True, null=True)

    def __str__(self):
        return self.nombre