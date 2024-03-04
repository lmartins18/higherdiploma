# syntax=docker/dockerfile:1

FROM node:hydrogen-slim
RUN apt-get update && apt-get upgrade
RUN apt-get install build-essential -y
RUN apt-get install python3 -y
RUN apt-get install git -y
RUN apt-get install libpng-dev -y
WORKDIR /books-backend
COPY . .
RUN npm install
CMD ["npm", "start"]
EXPOSE 8080