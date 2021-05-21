from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status

from .models import Description
from .serializers import DescriptionSerializer
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def getDescription(request):
    if request.method == 'GET':
        description = Description.objects.all()
        # print(description)
        description_serializer = DescriptionSerializer(description, many=True)
        return JsonResponse(description_serializer.data, safe=False)

    elif request.method == 'POST':
        description_data = JSONParser().parse(request)
        # print(description_data)
        description_serializer = DescriptionSerializer(data=description_data)
        if description_serializer.is_valid():
            description_serializer.save()
            return JsonResponse(description_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(description_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def getSingleDescription(request, field_name):
    if request.method == 'GET':
        description = Description.objects.all().filter(fieldName=field_name)
        description_serializer = DescriptionSerializer(description, many=True)
        return JsonResponse(description_serializer.data, safe=False)
# from django.shortcuts import render
# from rest_framework import viewsets
# from rest_framework.response import Response
# from .serializers import DescriptionSerializer
# from .models import Description
# # Create your views here.


# class DescriptionViewSet(viewsets.ModelViewSet):
#     queryset = Description.objects.all().order_by('id')
#     serializer_class = DescriptionSerializer
