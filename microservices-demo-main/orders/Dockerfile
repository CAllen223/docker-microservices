FROM node:10
WORKDIR /usr/src/orders
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8082
CMD [ "node", "orders.js"]