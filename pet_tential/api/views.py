from django.shortcuts import render
from rest_framework import generics, status
from .serializers import FoodSerializer, CreateFoodSerializer, PackSerializer, CreatePackSerializer
from .models import Food, Pack
from rest_framework.views import APIView
from rest_framework.response import Response

# Create Pack views here.
class PackView(generics.ListAPIView):
    queryset = Pack.objects.all()
    serializer_class = PackSerializer

class CreatePackView(APIView):
    serializer_class = CreatePackSerializer

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            pet_name = serializer.data.get('pet_name')
            host = self.request.session.session_key
            queryset = Pack.objects.filter(host=host)
            if queryset.exists():
                pack = queryset[0]
                pack.pet_name = pet_name
                pack.save(update_fields=['pet_name'])
                return Response(PackSerializer(pack).data, status=status.HTTP_200_OK)
            else:
                pack = Pack(host=host, pet_name=pet_name)
                pack.save()
                return Response(PackSerializer(pack).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


# Create your Food views here.
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