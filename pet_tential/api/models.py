from django.db import models

# Create your models here.
class Food(models.Model):
    meal_type = models.CharField(max_length=20, default="")
    date = models.DateField()
    fed_at = models.DateTimeField(auto_now_add=True)
    comment = models.CharField(max_length=100, default="")
    treats = models.IntegerField(null=False, default=0)