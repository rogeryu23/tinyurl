FROM node:6.3.1
RUN npm install nodemon -g
RUN mkdir -p tinyurlapp
WORKDIR /tinyurlapp
ADD . /tinyurlapp
RUN cd /tinyurlapp && npm install
EXPOSE 3000
CMD ["nodemon", "/tinyurlapp/server/server.js"]