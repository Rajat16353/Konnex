from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Bug
from .serializers import BugSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def getBug(request):
    if request.method == 'GET':
        bug = Bug.objects.all()
        # print(bug)
        bug_serializer = BugSerializer(bug, many=True)
        return JsonResponse(bug_serializer.data, safe=False)

    elif request.method == 'POST':
        bug_data = JSONParser().parse(request)
        bug_data['site_id'] = bug_data['site_id'].split('.')[0]
        bug_serializer = BugSerializer(data=bug_data)
        if bug_serializer.is_valid():
            bug_serializer.save()
            return JsonResponse(bug_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(bug_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def getSingleBug(request, site_id):
    if request.method == 'GET':
        bug = Bug.objects.all().filter(site_id=site_id)
        bug_serializer = BugSerializer(bug, many=True)
        return JsonResponse(bug_serializer.data, safe=False)
