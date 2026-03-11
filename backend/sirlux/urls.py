from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ReservacionViewSet, PaqueteViewSet, MenuViewSet, 
    ServicioAdicionalViewSet, ClienteViewSet
)

router = DefaultRouter()
router.register(r'reservaciones', ReservacionViewSet)
router.register(r'paquetes', PaqueteViewSet)
router.register(r'menus', MenuViewSet)
router.register(r'servicios', ServicioAdicionalViewSet)
router.register(r'clientes', ClienteViewSet)

urlpatterns = [
    path('', include(router.urls)),
]