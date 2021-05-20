from django.db import models

# Create your models here.


class Description(models.Model):
    fieldName = models.CharField(max_length=100)
    description = models.CharField(max_length=300)

    def __str__(self):
        return self.fieldName
