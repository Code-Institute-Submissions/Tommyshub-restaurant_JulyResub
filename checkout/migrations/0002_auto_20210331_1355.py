# Generated by Django 3.1.7 on 2021-03-31 13:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('checkout', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='grand_total',
            new_name='total',
        ),
    ]