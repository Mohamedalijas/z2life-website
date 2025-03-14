from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

urlpatterns = [
    # Admin URL
    path('admin/', admin.site.urls),

    # Include URLs from the 'main' app
    path('', include('main.urls')),
    path('',lambda request: redirect('index'))
]