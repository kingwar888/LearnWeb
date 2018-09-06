#!/usr/bin/env python
# coding=utf-8
Class Enum(object):
    def __init__(self, **source):
        self.__dict__ = source

    @property
    def source(self):
        return self.source

    def key(self):
        return self.source.key()

    def value(self):
        return self.source.value()

enum = Enum()
