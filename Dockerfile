FROM node:14

WORKDIR /finance-manager-api
COPY package.json .
RUN npm install
COPY . .
CMD npm start