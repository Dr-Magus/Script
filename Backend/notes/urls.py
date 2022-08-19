from django.urls import path
from . import views
from django.views.generic import TemplateView

urlpatterns = [
    path('subject', views.SubjectListView.as_view(), name='subject'),
    path('course', views.CourseListView.as_view(), name='course'),
    path("link", views.LinkListView.as_view(), name='link'),
]