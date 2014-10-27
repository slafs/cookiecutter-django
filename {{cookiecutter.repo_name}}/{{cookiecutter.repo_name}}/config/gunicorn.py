#!/usr/bin/env python

import multiprocessing

bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1
daemon = False

max_requests = 1000
# worker_class = gevent

accesslog = '-'
errorlog = '-'
