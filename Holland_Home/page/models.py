from django.db import models
from django.contrib.auth.models import User

class Tenant(models.Model):
    tenant_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Admin(models.Model):
    id = models.AutoField(primary_key=True)

    def __str__(self):
        return f"Admin {self.id}"


class TaskType(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name


class Room(models.Model):
    id = models.AutoField(primary_key=True)
    tenant = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tenant_room')

    def __str__(self):
        return f"Room {self.id}"


class Announcement(models.Model):
    id = models.AutoField(primary_key=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author_announcements')
    title = models.CharField(max_length=255)
    content = models.TextField()
    created_at = models.DateTimeField()
    
    def __str__(self):
        return self.title


class Task(models.Model):
    id = models.AutoField(primary_key=True)
    task_type = models.ForeignKey(TaskType, on_delete=models.CASCADE)
    date_due = models.DateTimeField()
    date_done = models.DateTimeField(null=True, blank=True)
    date_added = models.DateTimeField(auto_now_add=True)
    tenant = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tenant_tasks')
    room1 = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True, blank=True, related_name='tasks_primary')
    room2 = models.ForeignKey(Room, on_delete=models.SET_NULL, null=True, blank=True, related_name='tasks_secondary')

    def __str__(self):
        return f"Task {self.id} - {self.task_type.name}"
