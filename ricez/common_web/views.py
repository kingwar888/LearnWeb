# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.url import reverse
from django.shortcuts import render, redirect
from django.views.decorators.http import require_http_methods
from common_framework.utils.decorators import login_required
from django.contrib.auth import logout as django_logout
# Create your views here.

@login_required
def home(request):
    context = []
    return render(request, 'web/index.html', context=context)

@login_required 
def index(request):
    context = []
    return render(request, 'web/login.html', context=context)

def register(request):
    context = []
    return render(request, 'web/register.html', context=context)

def login(request):
    context = []
    return render(request, 'web/login.html', context=context)

@require_http_methods(['GET'])
@login_required
def logout(request):
    if request.method == 'GET':
        # operate_log
        django_logout(request)
    return redirect(reverse('common_web:login'))

