title: Acerca deste projecto | Passa à Primeira
subtitle: Passa à primeira é um guia interactivo das taxas de aprovação do IMT. Realizado por Flávio Sousa para Codecadre.
lang: pt
uri: /static/acerca/

## _Passa à Primeira_: uma visualização gratuita de dados públicos com foco na privacidade do utilizador

Na minha experiência com escolas de condução, constatei que os incentivos não estão alinhados para dar aos alunos a melhor experiência de ensino.

As escolas vêm-se obrigadas a ter de optar entre um acompanhamento mais dedicado, ou a acomodarem mais alunos - esta é a lógica da corrida aos preços baixos.

Ferramentas como esta permitem às escolas valorizarem a qualidade do seu ensino e que futuros alunos possam tomar uma melhor decisão, tendo em conta o seu contexto pessoal.

Esta aplicação permite ao utilizador visualizar num mapa as [taxas de aprovação do IMT](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx), em três passos:

#### 1 - Pesquisa por concelho

![home search with drop down view](/img/pages/about/search.png "Home page search")

#### 2 - Clica nos marcadores vermelhos

![list view map ](/img/pages/about/map.png "List view map")

#### 3 - Vê o perfil completo da escola

![School profile](/img/pages/about/school.png "School profile")

Caso saibas o nome da escola, podes pesquisar directamente também.

#### Origem dos dados

Os dados apresentados são referentes aos exames de 2015 a 2021, contabilizando todas as categorias (condução, mota, etc.) e apenas passagens à primeira. A taxa de aprovação é o número de exames aprovados, em relação ao número de exames realizados.

Está previsto no [decreto-lei n.º 14/2014, de 18 de março](https://www.imt-ip.pt/sites/imtt/portugues/ensinoconducao/indicadoresdesempenho_escolasconducao/Paginas/IndicadoresdeDesempenho_EscolasdeConducao.aspx) que o IMT publique regularmente as taxas de aprovação dos exames de condução, agregados por escola de condução. Desde uma primeira publicação em 2015, estes dados deixaram de ser actualizados, apesar de [pedidos de acesso a dados públicos](https://www.flaviosousa.co/pedido-accesso-dados-publicos/) e a uma queixa ao Provedor de Justiça.

Durante o ano de 2021, estes dados foram finalmente publicados, permitindo agora iniciativas como esta.

#### Open Source

Por uma questão de transparência e reproducibilidade, publicamos o código usado para extrair os dados, em formato open source:

- [Taxas de aprovação](https://github.com/codecadre/imt-pass-rates)
- [Moradas e licensa IMT](https://github.com/codecadre/imt-school-addresses)

Para facilitar iniciativas como esta, as taxas de aprovações podem ser importadas num Júpiter Notebook:

[Demo](https://github.com/codecadre/imt-pass-rates/blob/master/demo.ipynb)

#### Privacidade e GDPR

O site respeita as normas europeias de privacidade. Não usamos cookies para oferecer uma melhor experiência de navegação e, porque na [Codecadre](https://www.codecadre.ai), não acreditamos que ceder informação pessoal em troca de publicidade segmentada seja um modelo economicamente viável. Os nossos parceiros foram escolhidos com este princípio em mente.
