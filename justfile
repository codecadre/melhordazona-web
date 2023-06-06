#https://cheatography.com/linux-china/cheat-sheets/justfile/
DOCKER_COMPOSE_FILE := "./dev-server/docker-compose.yml"
export APACHE_DOCKER_IMG := "apache-server-passaprimeira"
export WEB_SERVER_PORT := "8081"
export ENV := "DEV_LOCAL"

list:
    @just --list

server:
    @ echo "Server at http://localhost:{{WEB_SERVER_PORT}}"
    docker compose -f {{DOCKER_COMPOSE_FILE}} up web -d

stop-server:
    docker stop {{APACHE_DOCKER_IMG}}

docker-build:
    docker compose -f {{DOCKER_COMPOSE_FILE}} build

attach-shell:
    docker exec -it {{APACHE_DOCKER_IMG}} /bin/bash

logs:
    docker exec -it {{APACHE_DOCKER_IMG}} tail -f -n 20 /var/log/apache2/error.log

less-watch:
    npx less-watch-compiler --less-args math=always src/less/ public/css/

shadow-watch:
    ./node_modules/.bin/shadow-cljs watch main

shadow-build:
    ./node_modules/.bin/shadow-cljs release main

pages:
    bb recepies/pages.clj
    ./node_modules/js-beautify/js/bin/html-beautify.js public/paginas/**/*.html  -r -s 2 -d

bb:
    bb nrepl

test:
    bb test/test_runner.clj

release:
    ENV="PROD" bb recepies/pages.clj
    ./node_modules/js-beautify/js/bin/html-beautify.js public/paginas/**/*.html  -r -s 2 -d
    just shadow-build
