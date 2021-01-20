from django.shortcuts import render
from rest_framework import generics, status
from .serializers import FoodSerializer, CreateFoodSerializer
from .models import Food
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class FoodView(generics.ListAPIView):
    queryset = Food.objects.all()
    serializer_class = FoodSerializer

class CreateFoodView(APIView):
    