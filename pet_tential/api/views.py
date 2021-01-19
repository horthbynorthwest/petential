from django.shortcuts import render
from rest_framework import generics
from .serializers import FoodSerializer
from .models import Food

# Create your views here.
class FoodView(generics.CreateAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer
