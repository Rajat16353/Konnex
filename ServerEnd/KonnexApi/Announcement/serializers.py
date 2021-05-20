from rest_framework import serializers
from .models import Announcement


class AnnouncementSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Announcement
        fields = ('id', 'title', 'announcement')
