from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.shortcuts import redirect, render


def login_user(request):
    if request.method == "POST":
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            messages.success(request, 'Username OR password is incorrect')
            return redirect('login_user')
    else:
        return render(request, 'login.html', {})
    
def logout_user(request):
    logout(request)
    messages.success(request, 'You have logged out successfully')
    return redirect('/')