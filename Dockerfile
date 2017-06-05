FROM node:alpine
RUN apk add --update sqlite

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY . /usr/src/app/
RUN npm install
RUN chmod +x /usr/src/app/dbscript.sh
RUN . /usr/src/app/dbscript.sh

ENV NODE_ENV production

EXPOSE 8080
CMD [ "npm", "start" ]
