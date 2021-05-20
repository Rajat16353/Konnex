from django.db import models

# Create your models here.


class Announcement(models.Model):
    title = models.CharField(max_length=100)
    announcement = models.CharField(max_length=500)

    def __str__(self):
        return self.title
