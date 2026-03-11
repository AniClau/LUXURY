from django.db import models

class Menu(models.Model):
    nombre = models.CharField(max_length=200)
    descripcion = models.TextField()
    tipo_tiempos = models.IntegerField(help_text="Número de tiempos que componen este menú")
    precio_por_persona = models.DecimalField(max_digits=10, decimal_places=2)
    imagen = models.URLField(max_length=500, blank=True, null=True)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre
