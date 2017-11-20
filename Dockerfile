FROM node:latest

WORKDIR /usr/src

RUN npm install gulp mocha -g

COPY package.json .

RUN npm install

COPY src/ .