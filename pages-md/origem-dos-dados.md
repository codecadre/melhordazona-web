title: Origem dos Dados | Passa à Primeira
subtitle: Passa à primeira cruza dados de várias fontes: Taxas de aprovação do IMT, moradas das escolas de condução e latitude e longitude do ESRI.
lang: pt
uri: /static/origem-dos-dados

## Qual a origem dos dados

### 1. Taxas de aprovação do IMT

Usámos as taxas de aprovação publicadas a partir de 2015 no site do IMT que podem ser consultados aqui:

<a href="https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx">Taxas de aprovação IMT para os anos de 2015 a 2020</a>

Usamos apenas as agregações globais, ou seja, categoria B, mota, pesados, etc, tudo agrupado.

Principalmente usámos os pdf por 'escolas de condução'.

Estes ficheiros estão num formato tabular em que as principais colunas para a nossa análise são, para as provas teóricas e práticas:

- Provas marcadas
- Provas realizadas
- percentagem de aprovação


A extração dos pdfs foi realizada num script python e o código fonte é Open Source e pode ser [consultado no github](https://github.com/codecadre/imt-pass-rates).

Publicamos o código por uma questão de transparencia. Tomámos todos os cuidados para verificar que a extração foi feita correctamente e queremos mostrar isso. Também é importante que outros possam reproduzir o processo.

Adicionalmente, mostramos como a base de dados pode ser importada num jupiter notebook para facilitar a análise estatistica.

#### Metodologia do IMT


Existe uma [ficha técnica publicada em 2014](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx"), que se presume que seja valiada ao longo dos anos, que explica a metodologia usada na agregação dos dados por escolas de condução:
- A percentagem de aprovação é o rácio de `número de aprovações / Total provas realizadas`
- `Total provas realizadas`: alunos que realizaram exame pela primeira vez. Apenas contabilizadas “aprovado” ou “reprovado”, ou seja, cancelado ou faltou foram excluidas.

### 2. Moradas e pagina do IMT.

Cada escola de condução tem uma página correspondente no site do IMT com

- Morada
- Nome da escola
- Licença ou número de escola
- Concelho e distrito


Em primeiro lugar, descarregamos cada página e construímos uma lista esta informação. O código e a base de dados e formato json podem ser [consultados aqui no github](https://github.com/codecadre/imt-school-addresses) ou na nossa secção [Open Source](#open-source).

Adicionalmente, corremos este codigo de tempos a tempos e propagamos quaisquer alterações que existam no site do IMT.

1. Das taxas de aprovação lemos o número de licensa.
2. Com o número de licensa cruzamos com os dados do site.
3. Ás vezes algumas licensas aparecem com outro nome talvez a escola tenha mudade de gerência. Neste caso, ignoramos.

Caso existam imprecisões, estas são propagadas desde o site do IMT, que consideramos a fonte de verdade.

Corremos os script com frequencia necessária para propagar alterações caso existam.

Para consulta uma lista de escolas sem moradas consultar [a seguinta pagina](pagina-com-listagem-completa):

| k                       | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 |
|-------------------------|------|------|------|------|------|------|
| circular-de-braga-00443 | true | true | true |      | true | true |
| chelas-01187            | true | true | true | true | true | true |
| boa-onda-01373          |      |      | true | true | true | true |
| auto-mira-00651         | true | true | true | true | true | true |

### 3. Latitude e longitude

ESRI data

Dataset pago, com limites de utilização. Não usamos google anteriormente pq queriamos usar OSM e o google tem limites de usitilização (Por os links que usaste nos issues sobre o google TOS)

...show list of schools with no geocode?

As escolas sem geocode aparecem nas listagens por concelho mas nao no mapa. Pode-se ser concsultadas taxas de avaliacao.
