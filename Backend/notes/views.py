from django.shortcuts import render
from django.http import Http404
from .models import Subject, Course, Link
from rest_framework import permissions, generics
from .serializers import SubjectSerializer, CourseSerializer, LinkSerializer
from rest_framework.views import APIView
from rest_framework.response import Response


class SubjectListView(generics.ListAPIView):

    queryset = Subject.objects.all()
    serializer_class = SubjectSerializer
    permission_classes = [permissions.AllowAny]

class CourseListView(generics.ListAPIView):

    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.AllowAny]


class LinkListView(APIView):

    def get_queryset(self, c=None, s=None, t=None):
        try:
            q = None
            if c and not(s):
                q = Link.objects.filter(course__course__iexact = c, mtype__iexact = t)
            elif s and not(c):
                q = Link.objects.filter(subject__subject__iexact = s, mtype__iexact = t)
            else:
                q = Link.objects.filter(course__course__iexact = c, subject__subject__iexact = s, mtype__iexact = t)
        
            return q
        except:
            return Http404

    def get(self, request, format=None):

        c = request.query_params.get('c')
        s = request.query_params.get('s')
        t = request.query_params.get('t')

        queryset = self.get_queryset(c = c, s = s, t = t) if c or s or t else Link.objects.all()
        serializer = LinkSerializer(queryset, many=True)


        data = {}

        for i in serializer.data:
            if s and not(c):
                # print('running')
                if i.get('course') not in data:
                    data[i.get('course')] = []
                data[i.get('course')].append({'title': i.get('title'), 'link': i.get('link')})
            elif c and not(s):
                # print("running")
                if i.get('subject') not in data:
                    data[i.get('subject')] = []
                data[i.get('subject')].append({'title': i.get('title'), 'link': i.get('link')})

        response = serializer.data if not(c) and not(s) or s and c else data 
        

        return Response(response)

    # def post(self, request, format=None):

    #     data = request.data
    #     print(data)
        
    #     queryset = Link.objects.all()
    #     serializer = LinkSerializer(queryset, many=True)

    #     return serializer.data
