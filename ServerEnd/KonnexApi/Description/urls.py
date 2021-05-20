from django.urls import base, path, include
from rest_framework import routers, urlpatterns
from . import views

router = routers.DefaultRouter()
router.register(r'descriptions', views.DescriptionViewSet,
                basename='Description')

urlpatterns = [
    path('', include(router.urls)),
    # path('Description-auth/',
    #      include('rest_framework.urls', namespace='rest_framework')),
]
