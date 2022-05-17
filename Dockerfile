FROM nginx:1.21-alpine

ARG source=./dist/neptunes-front

COPY ${source} /usr/share/nginx/html
