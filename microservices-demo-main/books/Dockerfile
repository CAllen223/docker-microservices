FROM node:10
WORKDIR /usr/src/books 
COPY package.json .
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "node", "books.js"]