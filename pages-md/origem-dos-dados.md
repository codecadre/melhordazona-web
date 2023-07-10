title: Origem dos Dados | Passa à Primeira
subtitle: Passa à primeira cruza dados de várias fontes: Taxas de aprovação do IMT, moradas das escolas de condução e latitude e longitude do ESRI.
lang: pt
uri: /static/origem-dos-dados/

## Qual a origem dos dados?

Nesta página explicamos quais as fontes usadas nesta aplicação.

### 1. Taxas de aprovação do IMT

Utilizámos as [taxas de aprovação publicadas a partir de 2015 no site do IMT](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx").

Concentrámo-nos nas agregações globais, ou seja, sem distinção entre as várias categorias: automóvel, mota, pesados, etc.

Os ficheiros originais em PDF estão num formato tabular em que as principais colunas para a nossa análise são:

- Provas marcadas
- Provas realizadas
- Percentagem de aprovação

A extração dos PDFs foi realizada num script Python e o código fonte pode ser [consultado no GitHub](https://github.com/codecadre/imt-pass-rates/blob/master/parse.ipynb).

Publicámos o código por uma questão de transparência. Tomámos todos os cuidados para verificar que a extração foi feita corretamente e ao tornar o código público, queremos que outros possam reproduzir e verificar.

Adicionalmente, a base de dados pode ser [importada num Jupyter Notebook](https://github.com/codecadre/imt-pass-rates/blob/master/demo.ipynb) para facilitar outros usos, como por exemplo, análise estatística:

![Distribuição de taxas de aprovação teórica vs. prática](/img/pages/data-sources/demo.png "Distribuição de taxas de aprovação teórica vs. prática")

#### Metodologia do IMT

Existe uma [ficha técnica publicada em 2014](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx"), que se presume ser válida ao longo dos anos, que explica a metodologia usada na agregação dos dados. Para a nossa applicação interessa:
- A percentagem de aprovação é o rácio `N. Aprovações / Provas Realizadas`
- `Provas Realizadas`: alunos que realizaram exame pela primeira vez. Apenas contabilizadas provas **aprovadas** ou **reprovadas**, ou seja, provas **canceladas** ou **com falta** são excluidas.

### 2. Moradas e página do IMT

Cada escola de condução tem uma página correspondente no site do IMT com as seguintes informações:

- Morada
- Nome da escola
- Licença ou número de escola
- Concelho e distrito

O código usado para a extração e a base de dados em formato JSON podem ser [consultados no GitHub](https://github.com/codecadre/imt-school-addresses).

Adicionalmente, executamos este código com a frequência necessária para propagar quaisquer alterações que existam no site do IMT.

Com o número de licença e com o nome da escola, cruzamos a morada com as taxas de aprovação. Por vezes não é possivel fazer este cruzamento, por exemplo quando o nome da escola difere para o mesmo número de licença - o que pode indicar que uma escola fechou e a licensa foi reutilizada.

Nos casos em que não foi possível cruzar a morada com as taxas de aprovação, listamos a escola na secção [sem informação sobre morada](https://passaprimeira.xyz/distritos-regioes/sem-info/).

### 3. Latitude e longitude

Nas iterações anteriores deste projeto, os dados eram obtidos através da API de geocodificação do Google Maps. No entanto, a [política de utilização](https://developers.google.com/maps/documentation/geocoding/policies) impunha a obrigação de exibir as escolas apenas em mapas do Google Maps.

> You can display Geocoding API results on a Google Map, or without a map. If you want to display Geocoding API results on a map, then these results must be displayed on a Google Map. It is prohibited to use Geocoding API data on a map that is not a Google map.

Por questões de privacidade, optámos por usar Leaflet e OpenStreetMap como _tile server_, o que obrigou a usar um serviço diferente de geocoding.

Desta forma, utilizámos a API de geocodificação da ESRI para converter o código postal (CP7) obtido na secção anterior, em latitude e longitude. Nos casos em que não foi possível obter as coordenadas geográficas, as escolas não são exibidas no mapa, no entanto, são listadas e devidamente assinaladas como tendo latitude e longitude em falta.
