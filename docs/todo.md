** data cleanup under recepies/

Main script

  -rw-r--r--.  1 fsousa fsousa 6.6K May 12 16:31 produce_data.clj

  Takes in:

  -rw-r--r--.  1 fsousa fsousa 330K May 11 16:28 address-geocode.edn
  -rw-r--r--.  1 fsousa fsousa 120K May 11 16:38 cp7.edn
  -rw-r--r--.  1 fsousa fsousa 8.1K May 12 15:30 geocode-overwrite.edn
  -rw-r--r--.  1 fsousa fsousa 8.4K May 10 11:31 overwrites.edn

  and produces

  -rw-r--r--.  1 fsousa fsousa 3.4M May 12 16:32 db.edn

  This is the main file that is used by

  -rw-r--r--.  1 fsousa fsousa 4.7K May 11 11:42 places.clj

  to produce the actual data in the web app


  -rw-r--r--.  1 fsousa fsousa 269K May 11 16:54 simple-db.txt

  is like db.edn but for an easy tabular view

  -rw-r--r--.  1 fsousa fsousa 6.9K May 12 15:31 cp7_map.clj

  these are data summary files produced by produce_data.clj

  -rw-r--r--.  1 fsousa fsousa 9.4K May 12 16:32 no-geocode.txt
  -rw-r--r--.  1 fsousa fsousa  21K May 12 16:32 no-imt-profile.txt
  -rw-r--r--.  1 fsousa fsousa 1.1K May 12 16:31 rates-duplicate-nec.txt
