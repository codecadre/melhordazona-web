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

Merges data from separate projects containing pass rates and address data
- [imt-pass-rates](https://github.com/codecadre/imt-pass-rates)
- [imt-school-addresses](https://github.com/codecadre/imt-school-addresses)

Tasks:

### CP7 and address geocoding

`bb cp7-addresses-geocoding n` n is optional. Reads from imt-school-addresses and outputs:

```
aggregate-transform-load/data/cp7.edn(txt)
aggregate-transform-load/data/address-geocode.edn(txt)
```
- Loops through incoming set of cp7 and addresses (imt-school-profiles doesn't delete entries).
- Transforms old batch into a lookup table.
- If it can't find a value in the lookup table, encodes with ESRI. If the value exists and the existing encoding score is bellow a certain threshold, re-encodes.

### Simple DB

`bb produce-data simple-db`

Merges pass rates, imt profiles and overwrites:

- imt-pass-rates-submodule/parsed-data/db.json
- imt-school-addresses-submodule/parsed-data/*
- overwrites.edn

Diff `simple-db.txt` to track what changed and work on `overwrites.edn` until things look decent: you'll either have to add entries, remove, or edit them. Few cases:
- overwrite entry has address-id nil: Check if school name is included in new entries.
- New imt-profile batch fixes nec and overwrite is no longer necessary.
- New imt-profile batch fixes nec and overwrite needs to be pointed to another address-id.

At some point I'll look into automating this with fuzzy pattern matching but that won't be a clean cut solution.

Also outputs:
- rates-duplicate-nec.txt
- no-imt-profile.txt

### Full Run

`bb produce-data`

Reads from:
- imt-pass-rates-submodule/parsed-data/db.json
- imt-school-addresses-submodule/parsed-data/*
- overwrites.edn

Outputs all datasets and debug files:
- simple-db.txt
- rates-duplicate-nec.txt
- no-imt-profile.txt

### Schools that now have imt-profile

They show up on the map:

| moncorvense-01201  | true | true | true | true | true | true |
| nova-mafra-00378   | true |      |      | true | true | true |
| d-chama-01057      | true | true | true | true | true | true |
| boliqueime-01081   | true | true | true | true | true | true |
| celas-00626        |      |      |      |      | true | true |
| do-juncal-01162    | true | true | true | true | true | true |
| macao-01171        | true | true | true | true | true | true |
| o-motorista-01179  | true | true | true | true | true | true |
| s-bartolomeu-00595 | true | true | true | true | true | true |
| malhoa-01314       | true | true | true | true |      |      |

You can't rely on the no-imt-profile.txt diff for this batch because of previous ordering but that's fixed for the next ones.
