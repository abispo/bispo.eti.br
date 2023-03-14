#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Alessandro Bispo dos Santos'
SITENAME = 'Alessandro Bispo'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# Social widget
#SOCIAL = (('You can add links in your config file', '#'),
#          ('Another social link', '#'),)

DEFAULT_PAGINATION = 10

THEME = 'themes/pelican-blue'

# pelican-blue #####

SOCIAL = (
    ('linkedin', 'https://www.linkedin.com/in/alessandrobispo/'),
    ('github', 'https://github.com/abispo/')
)

SIDEBAR_DIGEST = 'Developer'

DISPLAY_PAGES_ON_MENU = True

MENUITEMS = (
    ('About', ''),
    ('Projects', '')
)

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True