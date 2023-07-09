title: Data Sources | Passa à Primeira
subtitle: Passa à primeira cruza dados de várias fontes: Taxas de aprovação do IMT, moradas das escolas de condução e latitude e longitude do ESRI.
lang: en
uri: /static/en/data-sources/

## Qual data sources were used?

On this page, we explain the sources used in this application.

### 1. IMT Approval Rates

We used the [approval rates published from 2015 on the IMT website](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx").

We focused on overall aggregations, without distinction between various categories: car, motorcycle, truck, etc.

The original PDF files are in a tabular format, and the main columns for our analysis are:

- Scheduled exams
- Exams conducted
- Approval percentage

PDF extraction was done with a Python script and the source code can be [found on GitHub](https://github.com/codecadre/imt-pass-rates).

We have published the code for transparency purposes. We have taken all precautions to ensure that the extraction was done correctly, and we want to demonstrate this by making the code public and allowing others to reproduce and verify it.

Additionally, we show how to import the database into a Jupyter Notebook to facilitate other uses, such as statistical analysis.

#### IMT Methodology

There is a [technical sheet published in 2014](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx") that is presumed to be valid over the years, which explains the methodology used in aggregating the data by driving schools. For our application, the following is relevant:
- The approval percentage is the ratio of `Number of Approvals / Total Exams Conducted`
- `Total Exams Conducted`: students who took the exam for the first time. Only exams with the status **approved** or **failed** are counted, meaning that **canceled** or **absent** exams are excluded.

### 2. Addresses and IMT Page

Each driving school has a corresponding page on the IMT website with the following information:

- Address
- School name
- License or school number
- Municipality and district

The code used for extraction and the database in JSON format can be [found on GitHub](https://github.com/codecadre/imt-school-addresses).

Additionally, we run this code with the necessary frequency to propagate any changes that exist on the IMT website.

Using the license number and school name, we cross-reference the address with the approval rates. Sometimes, it is not possible to make this cross-reference, for example, when the school name differs for the same license number, which may indicate that a school has closed and the license has been reused.

In cases where it was not possible to match the address with the approval rates, we list the school in the [section without address information](https://passaprimeira.xyz/distritos-regioes/sem-info/).

### 3. Latitude and Longitude

In previous iterations of this project, the data was obtained through the Google Maps Geocoding API. However, the [usage policy](https://developers.google.com/maps/documentation/geocoding/policies) imposed limitations, such as the restriction to display schools only on Google Maps.

> You can display Geocoding API results on a Google Map, or without a map. If you want to display Geocoding API results on a map, then these results must be displayed on a Google Map. It is prohibited to use Geocoding API data on a map that is not a Google map.

And also:

[3.2.3 Restrictions against Misusing the Services.](https://cloud.google.com/maps-platform/terms/#3.-license.)

> (a) No Scraping. Customer will not export, extract, or otherwise scrape Google Maps Content for use outside the Services. For example, Customer will not: (i) pre-fetch, index, store, reshare, or rehost Google Maps Content outside the services; (ii) bulk download Google Maps tiles, Street View images, geocodes,

For privacy reasons, we opted to use `Leaflet` and OpenStreetMap as the tile server, which required using a different geocoding service in this new iteration of the project.

Therefore, we use the ESRI geocoding API to convert the postal code (CP7) obtained in the previous section into latitude and longitude. In cases where it was not possible to obtain the geographic coordinates, the schools are not displayed on the map but are listed and properly identified as having missing latitude and longitude information.
