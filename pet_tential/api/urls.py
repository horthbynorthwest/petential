from django.urls import path
from .views import FoodView, CreateFoodView

urlpatterns = [
    path('food', FoodView.as_view()),
    path('add-food', CreateFoodView.as_view())
    # get food holding path put in, for once logic written to query db for just pack food
    # path('get-food', GetFood.as_view())
]