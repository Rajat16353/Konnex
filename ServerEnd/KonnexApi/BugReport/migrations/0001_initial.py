# Generated by Django 3.2.3 on 2021-05-20 06:30

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bug',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fieldName', models.CharField(max_length=100)),
                ('report', models.CharField(max_length=300)),
                ('status', models.CharField(choices=[('fixed', 'fixed'), ('pending', 'pending')], max_length=100)),
            ],
        ),
    ]
