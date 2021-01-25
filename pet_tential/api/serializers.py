from rest_framework import serializers
from .models import Food, Pack

class PackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pack
        fields = ('id', 'code', 'host', 'pet_name', 'created_at')

class CreatePackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pack
        fields = ('pet_name',)

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('id', 'meal_type', 'date', 'fed_at', 'comment', 'treats', 'pack_id')

class CreateFoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = ('meal_type', 'date', 'comment', 'treats')