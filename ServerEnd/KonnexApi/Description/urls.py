from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers, urlpatterns
from . import views

urlpatterns = [
    path(r'descriptions/', views.getDescription),
    url(r'^descriptions/(?P<field_name>\w{0,50})/$',
        views.getSingleDescription),
]
