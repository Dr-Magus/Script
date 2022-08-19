from notes.models import Subject, Course, Link
from rest_framework import serializers


class SubjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Subject
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'

    # def to_representation(self, instance):
    #     rep = super(CourseSerializer, self).to_representation(instance)
    #     rep['courseSubject'] 

class LinkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Link
        fields = '__all__'

        # It will show the field name of Foreign Key field instead of id
    def to_representation(self, instance):
        rep = super(LinkSerializer, self).to_representation(instance)
        rep['course'] = instance.course.course
        rep['subject'] = instance.subject.subject
        return rep