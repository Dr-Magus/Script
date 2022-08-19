from django.contrib import admin
from .models import Subject, Course, Link
# Register your models here.

class CourseAdmin(admin.ModelAdmin):
    list_display = ('id', 'course')
    list_display_links = ('id', 'course')
    search_fields = ("course",)

class LinkAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'course', 'subject', 'mtype')
    list_display_links = ('id', 'title')
    search_fields = ('title', 'mtype')

admin.site.register(Subject)
admin.site.register(Course, CourseAdmin)
admin.site.register(Link, LinkAdmin)
