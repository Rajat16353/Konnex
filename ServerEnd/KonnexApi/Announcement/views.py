from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Announcement
from .serializers import AnnouncementSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def getAnnouncement(request):
    if request.method == 'GET':
        announcement = Announcement.objects.all()
        # print(announcement)
        announcement_serializer = AnnouncementSerializer(
            announcement, many=True)
        return JsonResponse(announcement_serializer.data, safe=False)

    elif request.method == 'POST':
        announcement_data = JSONParser().parse(request)
        announcement_serializer = AnnouncementSerializer(
            data=announcement_data)
        if announcement_serializer.is_valid():
            announcement_serializer.save()
            return JsonResponse(announcement_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(announcement_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
