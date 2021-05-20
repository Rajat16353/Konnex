from django.urls import path, include
from rest_framework import routers, urlpatterns
from . import views

router = routers.DefaultRouter()
router.register(r'bugs', views.BugViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('Bug-auth/',
    #      include('rest_framework.urls', namespace='rest_framework')),
]
