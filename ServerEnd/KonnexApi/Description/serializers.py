from rest_framework import serializers
from .models import Description


class DescriptionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Description
        fields = ('id', 'FieldName', 'Description')
