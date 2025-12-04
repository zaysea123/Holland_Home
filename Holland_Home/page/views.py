from django.shortcuts import render


def welcome(request    ):
    return render(request,'page/welcome.html', {})
def home(request):
    return render(request,'page/home.html', {})
def chat(request):
    return render(request,'page/chat.html', {})