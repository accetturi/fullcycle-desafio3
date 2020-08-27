#!/bin/bash

docker stop nestjs
#docker run -d --rm -p 3000:3000 --name nestjs -v $(pwd)/app:/home/node/app  -v $(pwd)/sqlite.db:/home/node/sqlite.db -e 'CHOKIDAR_USEPOLLING="true"' nestjs
docker run -d --rm -p 3000:3000 --name nestjs nestjs

