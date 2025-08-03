FROM node:18-alpine

# Install dependencies termasuk cifs-utils dan bash
RUN apk update && apk add --no-cache cifs-utils bash

WORKDIR /app

# Copy package files terlebih dahulu
COPY package*.json ./

# Install dependencies
RUN npm install

# Install nodemon secara global
RUN npm install -g nodemon

# Copy semua file (kecuali yang di .dockerignore)
COPY . .

EXPOSE 3000

# Gunakan nodemon dengan watch yang benar
CMD ["nodemon", "--legacy-watch", "--watch", "/app", "index.js"]