# Generated by Django 4.1.7 on 2023-02-27 00:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='note',
            name='user',
        ),
    ]
