FROM dockerfile/nodejs-bower-grunt
MAINTAINER slafs

RUN apt-get -qq update && DEBIAN_FRONTEND=noninteractive apt-get install -y -q ruby1.9.3

RUN gem install --no-rdoc --no-ri compass

ADD package.json /app/

# Define working directory.
WORKDIR /app

ADD bower.json /app/
RUN bower install --allow-root

ADD . /app

RUN npm install
RUN grunt build

CMD ["grunt", "serve"]
