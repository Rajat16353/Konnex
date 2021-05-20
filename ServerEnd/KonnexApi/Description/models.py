from django.db import models

# Create your models here.


class Description(models.Model):
    FieldName = models.CharField(max_length=100)
    Description = models.CharField(max_length=300)

    def __str__(self):
        return self.FieldName
