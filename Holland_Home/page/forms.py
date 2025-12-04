from django import forms
from django.forms import ModelForm
from .models import Tenant, Admin, TaskType, Room, Announcement, Task


class AnnouncementForm(ModelForm):
    class Meta:
        model = Announcement
        fields = ('title', 'content', 'author', 'created_at')
        labels = {
            'title': '',
            'content': '',
            'author': '',
            'created_at': 'YYYY-MM-DD HH:MM:SS',

        }
        widgets = {
            'title': forms.TextInput(attrs={'class':'form-control', 'placeholder':'announcement title'}),
            'content': forms.Textarea(attrs={'class':'form-control', 'placeholder':'announcement details'}),
            'author': forms.Select(attrs={'class':'form-select'}),
            'created_at': forms.DateTimeInput(attrs={'class':'form-control', 'placeholder':'created at'}),

            }

class TaskForm(ModelForm):
    class Meta:
        model = Task
        fields = ('task_type', 'date_due','tenant')
        labels = {
            'task_type': '',
            'date_due': 'YYYY-MM-DD HH:MM:SS',
            'tentant': '',
        }
        widgets = {
            'task_type': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'task type' }),
            'date_due': forms.DateTimeInput(attrs={'class': 'form-control', 'placeholder': 'Date'}),
            'tenant': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'tenant'  }),
        }