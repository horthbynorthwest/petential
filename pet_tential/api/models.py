from django.db import models
import string
import random


# For the pack.
def generate_unique_code():
    length = 6

    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if Pack.objects.filter(code=code).count() == 0:
            break

    return code

class Pack(models.Model):
    code = models.CharField(max_length=8, default=generate_unique_code, unique=True)
    host = models.CharField(max_length=50, unique=True)
    pet_name = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)



# For food.
class Food(models.Model):
    meal_type = models.CharField(max_length=20, null=True, default="")
    date = models.DateField()
    fed_at = models.DateTimeField(auto_now_add=True)
    comment = models.CharField(max_length=100, null=True, default="")
    treats = models.IntegerField(null=False, default=0)