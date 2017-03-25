FROM node:7.2.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./app/package.json /usr/src/app/
RUN npm install

COPY ./app/server.js /usr/src/app
EXPOSE 8080

CMD [ "npm", "start" ]