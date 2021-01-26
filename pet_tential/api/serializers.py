from rest_framework import serializers
from .models import Food, Pack, Walk

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

class WalkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Walk
        fields = ('id', 'date', 'time', 'duration', 'comment', 'pack_id')

class CreateWalkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Walk
        fields = ('date', 'time', 'duration', 'comment', 'pack_id')
