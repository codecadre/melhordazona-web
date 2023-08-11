Web UI for passaprimeira.xyz.

Babashka cgi script. Frontend is HTMX with some vanilaJS pieces.

## Run locally

To run the dev setup in a docker container do:
```
just server
```

Connect to [localhost:8081](http://localhost:8081).

## babashka nrepl

```
bb nrepl
```

## justfile

```
just -l
Available recipes:
    attach-shell
    bb
    deploy
    docker-build
    less-watch
    list
    logs
    pages
    release
    server
    shadow-build
    shadow-watch
    stop-server
    test

```

## git modules

```
git submodule init
git submodule update
```

## leaflet setup

```
npm i
cp  node_modules/leaflet/dist/leaflet.css public/vendor/leaflet
```

## host requirements

Apache2 and babashka

## Aggregate Transform Load

available at `/aggregate-transform-load`. This should get it's own project at some point, but for now it lives here.

[Readme.md](aggregate-transform-load/Readme.md)
