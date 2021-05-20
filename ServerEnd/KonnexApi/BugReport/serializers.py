from rest_framework import serializers
from .models import Bug


class BugSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Bug
        fields = ('id', 'fieldName', 'report', 'status')
