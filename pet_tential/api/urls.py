from django.urls import path
from .views import FoodView, CreateFoodView

urlpatterns = [
    path('food', FoodView.as_view()),
    path('add-food', CreateFoodView.as_view())
]