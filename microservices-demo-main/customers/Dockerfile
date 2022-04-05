FROM node:10
WORKDIR /usr/src/customers
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8081
CMD [ "node", "customers.js"]