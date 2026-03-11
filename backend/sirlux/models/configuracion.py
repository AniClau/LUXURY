from django.db import models
from django.core.exceptions import ValidationError

class ConfiguracionSistema(models.Model):
    hora_limpieza = models.PositiveIntegerField(help_text="Horas necesarias entre eventos para limpieza", default=2)
    hora_apertura = models.TimeField(default="08:00")
    hora_cierre = models.TimeField(default="23:00")
    dias_limite_cancelacion = models.PositiveIntegerField(default=60)
    anticipo_minimo = models.DecimalField(max_digits=10, decimal_places=2, default=1000)
    precio_hora_extra = models.DecimalField(max_digits=10, decimal_places=2, default=500)

    class Meta:
        verbose_name = "Configuración del Sistema"
        verbose_name_plural = "Configuración del Sistema"

    def save(self, *args, **kwargs):
        if not self.pk and ConfiguracionSistema.objects.exists():
            raise ValidationError('Solo puede existir una configuración del sistema.')
        return super(ConfiguracionSistema, self).save(*args, **kwargs)

    @classmethod
    def get_solo(cls):
        obj, created = cls.objects.get_or_create(pk=1)
        return obj

    def __str__(self):
        return "Configuración Global"
