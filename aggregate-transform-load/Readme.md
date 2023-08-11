Merges data from separate projects containing pass rates and address data
- [imt-pass-rates](https://github.com/codecadre/imt-pass-rates)
- [imt-school-addresses](https://github.com/codecadre/imt-school-addresses)
- ESRI: Geocodes Address or CP7

An ingestion workflow normally would look like this:

- 1. imt-pass-rates or imt-school-addresses have incoming changes
- 2. Run `bb produce-data simple-db` to produce `simple-db.txt` - a simplified view of the merge between the pass-rates data and the IMT profiles.
- 3. Edit `overwrites.edn` and run 2. until you're happy with the git diff of `simple-db.txt`.
- 4. `bb produce-data missing-geocode` and look at the git diff of `/no-geocode.txt`.
- 5. Get full output `bb produce-data`.
- 6. Copy the output and add it to `Changelog.edn`.
- 7. Look at the git diff of `data/db.edn`. There should be no surprises.
- 7. ....

Tasks:

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
- no-geocode.txt
- data/db.edn

### CP7 and address geocoding

`bb cp7-addresses-geocoding n` n is optional. Reads from imt-school-addresses and outputs:

```
aggregate-transform-load/data/cp7.edn(txt)
aggregate-transform-load/data/address-geocode.edn(txt)
```
- Loops through incoming set of cp7 and addresses (imt-school-profiles doesn't delete entries).
- Transforms old batch into a lookup table.
- If it can't find a value in the lookup table, encodes with ESRI. If the value exists and the existing encoding score is bellow a certain threshold, re-encodes.
- Anything less than a score of 100 for cp7 is retried, 95 for addresses.

Several reasons why geocoding has a lower score:
- Weird formating of original address
- missing, partial, or wrongly formated cp7
- other, ex:
```clojure
{:address
  "Rua Dr. José Marques – Edifício Arrábida 2000 r/c Esqº 2530-565 TORRES NOVAS",
  :address-c
  "Rua Doutor José Marques, 2530-610, Reguengo Grande, Lourinhã, Lisboa",
  :postal-c "2530-610",
  :x -9.218649894707,
  :y 39.286320889446,
  :score 76.67,
  :c 2}
```

Initially there was a geocode overwrite file, with addresses that I had cleaned up until I got match that looked good. However, that Is now outside of the scope of this project and I've deprecated this file. Using a thereshold of 85 to match addresses geocode, followed by cp7 (see below.)

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

### Geocode

`bb produce-data missing-geocode`

Produces `/no-geocode.txt`. Diff this file to check which schools are missing geocoding. I'm not outputing a simplified DB for geocoding data quality control, instead, that should be done at `CP7 and address geocoding`.

Using a threshold of 85 for addresses and 95 for cp7. You could lower the thresholds to get more matches if data looks good.

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
