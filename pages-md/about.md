title: About this Project | Passa à Primeira
subtitle: Passa à primeira is an interactive guide to IMT approval rates. Created by Flávio Sousa for Codecadre.
lang: en
uri: /about/

## _Passa à Primeira_: free data visualization with a focus on user privacy

In my experience with driving schools, I've noticed that the incentives are not aligned to provide students with the best learning experience.

Schools are forced to choose between providing more dedicated support or accommodating more students - this creates a push for increasingly lower prices.

Tools like this one, allow schools to highlight their quality and enable students to make better decisions.

This application allows you visualise the [IMT approval rates](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx) on a map in three steps:

#### 1 - Search by municipality

![home search with drop down view](/img/pages/about/search.png "Home page search")

#### 2 - Click on the red markers

![list view map ](/img/pages/about/map.png "List view map")

#### 3 - View the complete school profile

![School profile](/img/pages/about/school.png "School profile")

If you know the school name, you can also search directly.

#### Data source

From 2015 to 2020, including all categories (driving, motorcycle, etc.) and only first-time passes. The approval rate is the number of approved exams over the total number of exams done.

The Portuguese law says that ([decreto-lei n.º 14/2014, de 18 de março](https://www.imt-ip.pt/sites/imtt/portugues/ensinoconducao/indicadoresdesempenho_escolasconducao/Paginas/IndicadoresdeDesempenho_EscolasdeConducao.aspx)) IMT should publish approval rates regularly. Since the initial publication in 2015, these data have not been updated, despite freedom of information acts and a complaint to the Ombudsman.

During the year 2021, the data were finally made public, making  initiatives like this one possible.

#### Open Source

For a matter of transparency and reproducibility, we have published the code used to extract the data in open-source format:

[Approval rates](https://github.com/codecadre/imt-pass-rates)
[Addresses and IMT license](https://github.com/codecadre/imt-school-addresses)


To make initiatives like this one easier, the approval rates can be imported into a Jupyter Notebook:

[Demo](https://github.com/codecadre/imt-pass-rates/blob/master/demo.ipynb)

#### Privacy and GDPR

The website complies with European privacy standards. We do not use cookies to offer a better browsing experience because, at Codecadre, we do not believe that providing personal information in exchange for targeted advertising is an economically viable model. Our partners were chosen with this principle in mind.
