FROM node:8.11.3-alpine

ENV APP_PATH=/app
WORKDIR $APP_PATH

RUN apk update && \
    npm install -g npm vue-cli

RUN npm install vue
RUN npm install -g @vue/cli
RUN npm i vue-template-compiler

CMD [ "/bin/sh" ]