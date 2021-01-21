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
    serializer_class = CreateFoodSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            meal_type = serializer.data.get('meal_type')
            date = serializer.data.get('date')
            comment = serializer.data.get('comment')
            treats = serializer.data.get('treats')
            
            food = Food(meal_type=meal_type, date=date, comment=comment, treats=treats)
            food.save()
            return Response(FoodSerializer(food).data, status=status.HTTP_201_CREATED)
        
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)