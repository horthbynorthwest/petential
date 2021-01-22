from django.urls import path
from .views import FoodView, CreateFoodView, PackView, CreatePackView

urlpatterns = [
    path('food', FoodView.as_view()),
    path('add-food', CreateFoodView.as_view()),
    path('pack', PackView.as_view()),
    path('add-pack', CreatePackView.as_view())
]