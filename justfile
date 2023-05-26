#https://cheatography.com/linux-china/cheat-sheets/justfile/


DOCKER_COMPOSE_FILE := "./dev-server/docker-compose.yml"
DOCKER_IMG := "apache-server-passaprimeira"

list:
    @just --list

server:
    cd dev-server
    ENV=DEV_LOCAL docker compose -f {{DOCKER_COMPOSE_FILE}} up web -d

stop-server:
    docker stop {{DOCKER_IMG}}

docker-build:
    docker compose -f {{DOCKER_COMPOSE_FILE}} build

attach-shell:
    docker exec -it {{DOCKER_IMG}} /bin/bash

logs:
    docker exec -it {{DOCKER_IMG}} tail -f -n 20 /var/log/apache2/error.log

less-watch:
    npx less-watch-compiler --less-args math=always src/less/ public/css/

shadow-watch:
    ./node_modules/.bin/shadow-cljs watch main

pages:
    bb recepies/pages.clj
    ./node_modules/js-beautify/js/bin/html-beautify.js paginas/**/*.html  -r -s 2 -d

bb:
    bb nrepl
