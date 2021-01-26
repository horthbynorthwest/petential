from django.urls import path
from .views import FoodView, CreateFoodView, PackView, CreatePackView, GetPack, JoinPack, UserInPack, LeavePack, GetFood, WalkView

urlpatterns = [
    path('food', FoodView.as_view()),
    path('add-food', CreateFoodView.as_view()),
    path('pack', PackView.as_view()),
    path('add-pack', CreatePackView.as_view()),
    path('get-pack', GetPack.as_view()),
    path('join-pack', JoinPack.as_view()),
    path('user-in-pack', UserInPack.as_view()),
    path('leave-pack', LeavePack.as_view()),
    path('get-food', GetFood.as_view()),
    path('walk', WalkView.as_view())

]
