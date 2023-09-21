# FROM node:14
FROM node:lts-alpine as development

# Create app directory
WORKDIR /app

COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npx prisma generate

# CMD [ "node", "index.js" ]