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
