from django.shortcuts import render
from rest_framework import generics, status
from .serializers import FoodSerializer, CreateFoodSerializer, PackSerializer, CreatePackSerializer
from .models import Food, Pack
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse

# Create Pack views here.
class PackView(generics.ListAPIView):
    queryset = Pack.objects.all()
    serializer_class = PackSerializer

class GetPack(APIView):
    serializer_class = PackSerializer
    lookup_url_kwarg = 'code'

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if code != None:
            pack = Pack.objects.filter(code=code)
            if len(pack) > 0:
                data = PackSerializer(pack[0]).data
                data['is_host'] = self.request.session.session_key == pack[0].host
                return Response(data, status=status.HTTP_200_OK)
            return Response({'Pack Not Found': 'Invalid Pack Code.'}, status=status.HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Code paramater not found in request'}, status=status.HTTP_400_BAD_REQUEST)

class JoinPack(APIView):
    lookup_url_kwarg = 'code'

    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        code = request.data.get(self.lookup_url_kwarg)
        if code != None:
            pack_result = Pack.objects.filter(code=code)
            if len(pack_result) > 0:
                pack = pack_result[0]
                self.request.session['pack_code'] = code
                return Response({'message': 'Pack Joined!'}, status=status.HTTP_200_OK)

            return Response({'Bad Request': 'Invalid Pack Code'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'Bad Request': 'Invalid post data, did not find a code key'}, status=status.HTTP_400_BAD_REQUEST)

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
                self.request.session['pack_code'] = pack.code
                return Response(PackSerializer(pack).data, status=status.HTTP_200_OK)
            else:
                pack = Pack(host=host, pet_name=pet_name)
                pack.save()
                self.request.session['pack_code'] = pack.code
                return Response(PackSerializer(pack).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class UserInPack(APIView):
    def get(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        data = {
            'code': self.request.session.get('pack_code')
        }
        return JsonResponse(data, status=status.HTTP_200_OK)

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