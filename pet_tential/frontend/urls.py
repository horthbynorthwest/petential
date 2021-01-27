from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('create', index),
    path('join', index),
    path('pack/<str:packCode>', index),    
    path('food', index),
    path('walk', index),
    path('behaviour', index),
    path('toilet', index),
    path('medical', index),
    path('weather', index)
]