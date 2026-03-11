from django.db import models
from .reservaciones import Reservacion
from .menus import Menu

class Degustacion(models.Model):
    reservacion = models.ForeignKey(Reservacion, on_delete=models.CASCADE, related_name='degustaciones')
    menu = models.ForeignKey(Menu, on_delete=models.PROTECT)
    fecha = models.DateField()
    hora = models.TimeField()
    estado = models.CharField(max_length=50, default='Programada')

    def __str__(self):
        return f"Degustación {self.id} for {self.reservacion}"
