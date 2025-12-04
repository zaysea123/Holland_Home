from django.shortcuts import render
from .models import Announcement


def welcome(request    ):
    return render(request,'page/welcome.html', {})
def home(request):
    return render(request,'page/home.html', {})
def chat(request):
    return render(request,'page/chat.html', {})