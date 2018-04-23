FROM node:9.4

RUN mkdir /app

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD npm test

