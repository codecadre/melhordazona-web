# 30/08/2023

Merges 2021 data from [[PDF SCRAPING] 2021](https://github.com/codecadre/imt-pass-rates/pull/2)

Data changes summary:

1249 School entries from pass rates pdf.
78 Manual imt-profile overwrites
1101 Schools WITH imt profile
47 imt profiles with no geocoding.



## New schools entries

| Pass rate key               | NEC  | IMT Profile Name      |
|-----------------------------|------|-----------------------|
| serpa-00324                 | 324  | Serpa                 |
| deuladeu-00544              | 544  | Deu-la-Deu            |
| a-nova-lixa-00574           | 574  | A Nova Lixa           |
| easydrive-00705             | 705  | Easydrive             |
| df-00863                    | 863  | NOT FOUND             |
| aliada-00914                | 914  | Aliada                |
| prina-01008                 | 1008 | Prina                 |
| dominante-01043             | 1043 | Dominante             |
| lena-d-arrifana-01123       | 1123 | NOT FOUND             |
| matriz-01186                | 1186 | NOT FOUND             |
| nova-malveira-01258         | 1258 | Nova Malveira         |
| nova-do-porto-01399         | 1399 | Nova do Porto         |
| agv-porto-01410             | 1410 | AGV Porto             |
| motoschool-01418            | 1418 | Motoschool            |
| veiculos-01443              | 1443 | NOT FOUND             |
| alta-top-01447              | 1447 | NOT FOUND             |
| drive-in-agueda-01449       | 1449 | NOT FOUND             |
| novo-engenho-de-grijo-01450 | 1450 | Novo Engenho de Grijó |
| rainha-de-agueda-01451      | 1451 | Rainha de Águeda      |
| academia-do-condutor-01452  | 1452 | Academia do Condutor  |
| cooldrive-01453             | 1453 | Cooldrive             |
| bn-valongo-01454            | 1454 | BN Valongo            |
| zig-zag-01455               | 1455 | Zig Zag               |
| sinal-verde-01456           | 1456 | NOT FOUND             |

# 11/08/2023

[Reference PR](https://github.com/codecadre/melhordazona-web/pull/10)

Merges imt-profiles batch from [[DATA FETCH] 24-07-2023]( https://github.com/codecadre/imt-school-addresses/pull/2).

Data changes summary:

- 1225 School entries from pass rates pdf.
- 74 Manual imt-profile overwrites
- 1084 Schools WITH imt profile
- 45 imt profiles with no geocoding.

## Schools that now have imt-profile

They show up on the map:

```
|                    | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 |
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
```

You can't rely on the no-imt-profile.txt diff for this batch because of previous ordering but that's fixed for the next ones.
