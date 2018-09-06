from django.conf.urls import url, include
from common_web import views

urlpatterns = [
    url(r'^/', views.home, name='index'),
    url(r'^login/', views.login, name='login'),
    url(r'^register/', views.register, name='register'),
    url(r'^/', views.home, name='index'),
]
