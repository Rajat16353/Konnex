from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers, urlpatterns
from . import views

urlpatterns = [
    path(r'announcements/', views.getAnnouncement),
]
