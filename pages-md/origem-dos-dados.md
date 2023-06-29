title: Origem dos Dados | Passa à Primeira
subtitle: Passa à primeira cruza dados de várias fontes: Taxas de aprovação do IMT, moradas das escolas de condução e latitude e longitude do ESRI.
lang: pt
uri: /static/origem-dos-dados/

## Qual a origem dos dados?

Nesta página explicamos quais as fontes usadas nesta aplicação.

### 1. Taxas de aprovação do IMT

Usámos as [taxas de aprovação publicadas a partir de 2015 no site do IMT](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx"), que podem ser consultados aqui:

Focámo-nos nas agregações globais, ou seja, categoria B, mota, pesados, etc, tudo agrupado.

Estes ficheiros estão num formato tabular em que as principais colunas para a nossa análise são:

- Provas marcadas
- Provas realizadas
- percentagem de aprovação


A extração dos pdfs foi realizada num script Python e o código fonte pode ser [consultado no github](https://github.com/codecadre/imt-pass-rates).

Publicamos o código por uma questão de transparencia. Tomámos todos os cuidados para verificar que a extração foi feita correctamente e queremos mostrar isso ao tornar publico o código. Também é importante que outros possam reproduzir o processo.

Adicionalmente, a base de dados pode ser importada num Jupyter Notebook para facilitar a análise estatistica.

#### Metodologia do IMT


Existe uma [ficha técnica publicada em 2014](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx"), que se presume que seja valida ao longo dos anos, que explica a metodologia usada na agregação dos dados por escolas de condução:
- A percentagem de aprovação é o rácio de `número de aprovações / Total provas realizadas`
- `Total provas realizadas`: alunos que realizaram exame pela primeira vez. Apenas contabilizadas “aprovado” ou “reprovado”, ou seja, cancelado ou faltou foram excluidas.

### 2. Moradas e pagina do IMT.

Cada escola de condução tem uma página correspondente no site do IMT com

- Morada
- Nome da escola
- Licença ou número de escola
- Concelho e distrito


O código usado para a extração e a base de dados em formato `json` podem ser [consultados no github](https://github.com/codecadre/imt-school-addresses).

Adicionalmente, corremos este codigo com a frequência necessária para propagar quaisquer alterações que existam no site do IMT.

Nos casos onde não foi possivel cruzar a morada com as taxas de aprovação, listamos a escola na [secção sem informacao sobre morada.](passaprimeira.xyz/distritos-regioes/sem-info/).

### 3. Latitude e longitude

Estes dados podiam ter vindo do google maps Geocoding API. No entanto a [politica de utilização](https://developers.google.com/maps/documentation/geocoding/policies) tem limitações, nomeadamente, ficavamos limitados a mostrar as escolas apenas em mapas do google maps.

> You can display Geocoding API results on a Google Map, or without a map. If you want to display Geocoding API results on a map, then these results must be displayed on a Google Map. It is prohibited to use Geocoding API data on a map that is not a Google map.

e também:

[3.2.3 Restrictions Against Misusing the Services. ](https://cloud.google.com/maps-platform/terms/#3.-license.)

> (a) No Scraping. Customer will not export, extract, or otherwise scrape Google Maps Content for use outside the Services. For example, Customer will not: (i) pre-fetch, index, store, reshare, or rehost Google Maps Content outside the services; (ii) bulk download Google Maps tiles, Street View images, geocodes,

Usar google maps estava fora de questão pois por questões de privacidade não queriamos usar e tinhamos optado por `Leaflet` e Open street maps.

Por isso, usamos a API de geocoding da ESRI para converter o codigo postal (CP7) em latitude e longitude. Escolas Onde não foi possivel fazer a conversao, nao aparecem com o marcador no mapa do concelho, mas aparecem listadas, e devidamente asinaladas em que a informacao de latitude e longitude esta em falta.
