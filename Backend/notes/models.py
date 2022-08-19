from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone

# Create your models here.


MATERIAL_TYPE = {
    ("NTS", "Notes"),
    ("PYQ", "Previous Year Questions"),
    ("RFR", "Reference Material")
}

class Subject(models.Model):

    subject = models.CharField(max_length=64)
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.subject

class Course(models.Model):

    course = models.CharField(max_length=64)
    courseSubject = models.ManyToManyField(to=Subject, blank=True, related_name='subjectName')
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.course

class Link(models.Model):

    course = models.ForeignKey(to=Course, on_delete=models.CASCADE)
    subject = models.ForeignKey(to=Subject, on_delete=models.CASCADE)
    link = models.URLField(blank=True)
    title = models.CharField(max_length=64, blank=True)
    mtype = models.CharField(max_length=64, blank=True, choices=MATERIAL_TYPE) # mtype --> material type
    timestamp = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.title