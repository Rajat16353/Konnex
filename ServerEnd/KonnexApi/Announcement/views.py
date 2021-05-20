from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AnnouncementSerializer
from .models import Announcement
# Create your views here.


class AnnouncementViewSet(viewsets.ModelViewSet):
    queryset = Announcement.objects.all().order_by('id')
    serializer_class = AnnouncementSerializer
