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

# Will need a get function for food, which will take pack code, look up pack id, then retrieve all food with that pack id
# does that maybe look like a pack serializer for get pack id, which is then somehow called by the food serializer?
# pack id is not currently a column in the food table...

#   lookup_url_kwarg = 'pack_id'

#     def get(self, request, format=None):
#         pack_id = request.GET.get(self.lookup_url_kwarg) # this prob needs changing so that it takes a method from the GetPack class
#         if pack_id != None:
#             foodList = Food.objects.filter(pack_id=pack_id)

#         return Response({'Bad Request': 'Pack id paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

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