# Generated by Django 3.1.5 on 2021-01-26 12:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_auto_20210125_1541'),
    ]

    operations = [
        migrations.CreateModel(
            name='Walk',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.TimeField(auto_now=True)),
                ('duration', models.DurationField()),
                ('comment', models.CharField(default='', max_length=100, null=True)),
                ('pack', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.pack')),
            ],
        ),
    ]
