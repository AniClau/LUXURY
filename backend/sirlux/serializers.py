from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import (
    Cliente, Paquete, Menu, ServicioAdicional, 
    Reservacion, Degustacion, ConfiguracionSistema
)

Usuario = get_user_model()

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['id', 'username', 'nombre', 'apellido_paterno', 'apellido_materno', 'email', 'telefono', 'rol', 'estatus']
        extra_kwargs = {'password': {'write_only': True}}

class ClienteSerializer(serializers.ModelSerializer):
    usuario_detalle = UsuarioSerializer(source='usuario', read_only=True)
    class Meta:
        model = Cliente
        fields = '__all__'

class PaqueteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paquete
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'

class ServicioAdicionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicioAdicional
        fields = '__all__'

class ConfiguracionSistemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ConfiguracionSistema
        fields = '__all__'

class ReservacionSerializer(serializers.ModelSerializer):
    cliente_nombre = serializers.ReadOnlyField(source='cliente.usuario.get_full_name')
    paquete_nombre = serializers.ReadOnlyField(source='paquete.nombre')
    
    class Meta:
        model = Reservacion
        fields = '__all__'

class DegustacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Degustacion
        fields = '__all__'