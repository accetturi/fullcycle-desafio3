FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

#RUN touch /home/node/.bashrc | echo "PS1='\w\$ '" >> /home/node/.bashrc

RUN npm config set cache /home/node/app/.npm-cache --global

RUN npm i -g @nestjs/cli@7.4.1

COPY sqlite.db /home/node/sqlite.db
RUN chmod 755 /home/node/sqlite.db && chown node:node /home/node/sqlite.db

#RUN npm install

COPY app /home/node/
RUN chown node:node -R /home/node/app

USER node

ENV CHOKIDAR_USEPOLLING=true

WORKDIR /home/node/app

ENTRYPOINT ["npm", "run", "start"]
#CMD sh