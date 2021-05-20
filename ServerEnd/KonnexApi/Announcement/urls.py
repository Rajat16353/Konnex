from django.urls import path, include
from rest_framework import routers, urlpatterns
from . import views

router = routers.DefaultRouter()
router.register(r'announcements', views.AnnouncementViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('Announcement-auth/',
         include('rest_framework.urls', namespace='rest_framework'))
]
