server-spin:
	cd dev-server
	ENV=DEV_LOCAL docker compose -f ./dev-server/docker-compose.yml up web -d

server-stop:
	docker stop apache-server-passaprimeira

docker-build:
	docker compose -f ./dev-server/docker-compose.yml build

attach-shell:
	docker exec -it apache-server-passaprimeira /bin/bash

logs-tail:
	docker exec -it apache-server-passaprimeira tail -f -n 20 /var/log/apache2/error.log

less-watch:
	npx less-watch-compiler --less-args math=always src/less/ public/css/

pages:
	bb recepies/pages.clj
	./node_modules/js-beautify/js/bin/html-beautify.js paginas/**/*.html  -r -s 2 -d
