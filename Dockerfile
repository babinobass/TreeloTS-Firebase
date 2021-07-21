FROM node:14.17.0-alpine

WORKDIR /TrelloTS-Firebase

ENV PATH /TrelloTS-Firebase/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

COPY . ./

CMD ["npm", "start"]