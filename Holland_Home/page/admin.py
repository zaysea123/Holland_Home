from django.contrib import admin
from .models import Tenant, Admin, TaskType, Room, Announcement, Task

admin.site.register(Tenant)
admin.site.register(Admin)
admin.site.register(TaskType)
admin.site.register(Room)
admin.site.register(Announcement)
admin.site.register(Task)