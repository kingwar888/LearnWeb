# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.contrib.auth.models import AbstractUser
from django.db import models
from common_framework.utils.enum import enum
# Create your models here.


class User(AbstractUser):
    logo = models.ImageField()
    phone_num = models.CharField()

    Status= enum(
        DELETE=0,
        NORMAL=1,
    )
    status = models.PositiveIntegerField(default=1)
