from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('food', index),
    path('walk', index),
    path('behaviour', index),
    path('toilet', index),
    path('medical', index),
]