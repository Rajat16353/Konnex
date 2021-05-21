from django.db import models

statusChoices = [
    ('fixed', 'fixed'),
    ('pending', 'pending'),
]

# Create your models here.


class Bug(models.Model):
    site_id = models.CharField(max_length=200, default='index')
    report = models.CharField(max_length=300)
    status = models.CharField(
        max_length=100, choices=statusChoices, default='pending')

    def __str__(self):
        return self.status
