from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers, urlpatterns
from . import views

urlpatterns = [
    path(r'reportbug/', views.getBug),
    url(r'^reportbug/(?P<site_id>\w{0,50})/$',
        views.getSingleBug),
]
