FROM python:2.7

#VOLUME ["/wheels", "/code"]

RUN apt-get -qq update && DEBIAN_FRONTEND=noninteractive apt-get install -y -q libpq-dev

RUN pip install -U pip wheel setuptools

ADD requirements.txt /reqs/requirements.txt
ADD requirements /reqs/requirements
WORKDIR /reqs

RUN pip wheel --wheel-dir=/wheels -r requirements/local.txt

RUN pip install --find-links /wheels -r requirements/local.txt
RUN pip install --find-links /wheels -r requirements.txt


ADD . /code
WORKDIR /code

CMD ["gunicorn", "--pythonpath=/code/testdjango", "config.wsgi:application"]

EXPOSE 8000
