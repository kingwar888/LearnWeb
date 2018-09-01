# coding=utf-8
"""
app name: blog
web urls in blog.urls
cms urls in blog.cms_urls
urlpattern = [
    url(r'^blog/', include('blog.urls',namespace='blog'))
    url(r'^admin/blog/', include('blog.cms_urls',namespace='cms_blog'))
]
"""
import os
import logging

from ricez import settings
from django.conf.urls import url, include

logger = logging.getLogger(__name__)


class LoadApp(object):
    def __init__(self, app, urlpatterns):
        self.app = app
        self.urlpatterns = urlpatterns

    def update_urlpatterns(self, app_name):
        app_url_path = os.path.join(settings.BASE_DIR, app_name, 'urls.py')
        if os.path.exists(app_url_path):
            try:
                self.urlpatterns.append(url(r'^%s' % app_name,include(app_url_path,namespace='%s' % app_name)))
            except Exception as e:
                logger.info("load url error [%s]", str(e))
                raise e

        app_cms_url_path = os.path.join(settings.BASE_DIR, app_name, 'cms_urls.py')
        if os.path.exists(app_cms_url_path):
            try:
                self.urlpatterns.append(url(r'^%s/%s/' % ('admin', app_name), include(app_url_path, namespace='%s' % app_name)))
            except Exception as e:
                logger.info("load url error [%s]", str(e))
                raise e

    def load_url(self):
        app_path = os.path.join(settings.BASE_DIR, self.app)
        if os.path.exists(app_path):
            try:
                self.update_urlpatterns(self.app)

            except Exception as e:
                logger.info("load url error [%s]", str(e))
                raise e