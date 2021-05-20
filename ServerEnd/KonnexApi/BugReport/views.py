from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BugSerializer
from .models import Bug
# Create your views here.


class BugViewSet(viewsets.ModelViewSet):
    queryset = Bug.objects.all().order_by('id')
    serializer_class = BugSerializer
