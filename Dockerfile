FROM node:20-alpine

WORKDIR /usr/tut-factory

COPY package*.json yarn.lock ./

RUN yarn install

COPY . .

# client port
EXPOSE 3000

# server port
EXPOSE 5000

CMD ["yarn", "client"]

