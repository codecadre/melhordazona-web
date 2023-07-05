title: Origem dos Dados | Passa à Primeira
subtitle: Passa à primeira cruza dados de várias fontes: Taxas de aprovação do IMT, moradas das escolas de condução e latitude e longitude do ESRI.
lang: pt
uri: /static/origem-dos-dados/

## Qual a origem dos dados?

Nesta página explicamos quais as fontes usadas nesta aplicação.

### 1. Taxas de aprovação do IMT

Utilizámos as [taxas de aprovação publicadas a partir de 2015 no site do IMT](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx").

Concentramo-nos nas agregações globais, ou seja, sem distinção entre várias categorias: automóvel, mota, pesados, etc.

Os ficheiros originais em PDF estão num formato tabular em que as principais colunas para a nossa análise são:

- Provas marcadas
- Provas realizadas
- Percentagem de aprovação

A extração dos PDFs foi realizada num script Python e o código fonte pode ser [consultado no GitHub](https://github.com/codecadre/imt-pass-rates).

Publicamos o código por uma questão de transparência. Tomámos todos os cuidados para verificar que a extração foi feita corretamente e queremos demonstrar isso, ao tornar o código público e permitir que outros possam reproduzir e verificar.

Adicionalmente, a base de dados pode ser importada num Jupyter Notebook para facilitar outros usos, como por exemplo, análise estatística.

#### Metodologia do IMT

Existe uma [ficha técnica publicada em 2014](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx"), que se presume ser válida ao longo dos anos, que explica a metodologia usada na agregação dos dados por escolas de condução. Para a nossa applicação interessa:
- A percentagem de aprovação é o rácio de `Número de Aprovações / Total Provas Realizadas`
- `Total Provas Realizadas`: alunos que realizaram exame pela primeira vez. Apenas contabilizadas provas com o estado **aprovado** ou **reprovado**, ou seja, provas **canceladas** ou **com falta** são excluidas.

### 2. Moradas e página do IMT

Cada escola de condução tem uma página correspondente no site do IMT com as seguintes informações:

- Morada
- Nome da escola
- Licença ou número de escola
- Concelho e distrito

O código usado para a extração e a base de dados em formato JSON podem ser [consultados no GitHub](https://github.com/codecadre/imt-school-addresses).

Adicionalmente, executamos este código com a frequência necessária para propagar quaisquer alterações que existam no site do IMT.

Com o número de licença e com nome da escola, cruzamos a morada com as taxas de aprovação. Por vezes não é possivel fazer este cruzamento, por exemplo quando o nome da escola difere para o mesmo número de licença - o que pode indicar que uma escola fechou e a licensa foi reutilizada.

Nos casos em que não foi possível cruzar a morada com as taxas de aprovação, listamos a escola na [secção sem informação sobre morada](https://passaprimeira.xyz/distritos-regioes/sem-info/).

### 3. Latitude e longitude

Nas iterações anteriores deste projeto, os dados eram obtidos através da API de Geocodificação do Google Maps. No entanto, a [política de utilização](https://developers.google.com/maps/documentation/geocoding/policies) impunha limitações, como a restrição de exibir as escolas apenas em mapas do Google Maps.

> You can display Geocoding API results on a Google Map, or without a map. If you want to display Geocoding API results on a map, then these results must be displayed on a Google Map. It is prohibited to use Geocoding API data on a map that is not a Google map.

E também:

[3.2.3 Restrições contra o uso indevido dos serviços. ](https://cloud.google.com/maps-platform/terms/#3.-license.)

> (a) No Scraping. Customer will not export, extract, or otherwise scrape Google Maps Content for use outside the Services. For example, Customer will not: (i) pre-fetch, index, store, reshare, or rehost Google Maps Content outside the services; (ii) bulk download Google Maps tiles, Street View images, geocodes,

Por questões de privacidade, optámos por usar Leaflet e OpenStreetMap como tile server, o que obrigou a usar um serviço diferente de geocoding nesta nova iteração do projecto.

Desta forma, utilizamos a API de geocodificação da ESRI para converter o código postal (CP7) obtido na secção anterior, em latitude e longitude. Nos casos em que não foi possível obter as coordenadas geogŕaficas, as escolas não são exibidas no mapa, mas são listadas e devidamente identificadas como tendo informações de latitude e longitude em falta.
