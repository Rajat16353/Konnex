from django.shortcuts import render
from rest_framework import viewsets
from .serializers import DescriptionSerializer
from .models import Description
# Create your views here.


class DescriptionViewSet(viewsets.ModelViewSet):
    queryset = Description.objects.all().order_by('id')
    serializer_class = DescriptionSerializer
