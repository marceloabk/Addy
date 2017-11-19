FROM node:latest

WORKDIR /usr/src

RUN npm install gulp -g

COPY package.json .

RUN npm install

COPY src/ .