from django.db import models

statusChoices = [
    ('fixed', 'fixed'),
    ('pending', 'pending'),
]

# Create your models here.


class Bug(models.Model):
    fieldName = models.CharField(max_length=100)
    report = models.CharField(max_length=300)
    status = models.CharField(max_length=100, choices=statusChoices)

    def __str__(self):
        return self.status
