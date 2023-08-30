title: Data Sources | Passa à Primeira
subtitle: Passa à primeira cruza dados de várias fontes: Taxas de aprovação do IMT, moradas das escolas de condução e latitude e longitude do ESRI.
lang: en
uri: /static/en/data-sources/

## What data sources were used?

On this page, we'll go through the data sources used in this application.

### 1. Pass Rates

We have used the [pass rates published since 2015 on the IMT website](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx") and focused on the overall aggregations, i.e. without distinguishing between various categories such as car, motorcycle, lorry, etc.

The original files in PDF are in a tabular format, and the main columns for our analysis are:

- Scheduled exams
- Exams taken
- Pass rate

The PDF extraction was done using a Python script, and the source code can be [found on GitHub](https://github.com/codecadre/imt-pass-rates/blob/master/parse.ipynb).

We have made the code public for transparency purposes. We have [taken all precautions to ensure that the extraction was done correctly](https://github.com/codecadre/imt-pass-rates/blob/master/quality-control.ipynb), and by making the code available, we want others to be able to reproduce and verify it.

Additionally, the database can be [imported into a Jupyter Notebook](https://github.com/codecadre/imt-pass-rates/blob/master/demo.ipynb) to facilitate other uses, such as statistical analysis:

![Distribution of theoretical vs. practical pass rates](/img/pages/data-sources/demo.png "Distribution of theoretical vs. practical pass rates")

#### IMT Methodology

There is a [technical sheet published in 2014](https://www.imt-ip.pt/sites/IMTT/Portugues/EnsinoConducao/taxasdeaprovacao/Paginas/TaxasdeAprovacao.aspx"), which is presumed to be valid over the years, explaining the methodology used in aggregating the data. For our application, the following is relevant:
- The pass rate is the ratio `Number of Approvals / Exams Taken`
- `Exams Taken`: students who took the exam for the first time. Only **approved** or **failed** exams are counted, meaning **canceled** or **absent** exams are excluded.

### 2. Addresses and IMT Page

Each driving school has a corresponding page on the IMT website with the following information:

- Address
- School name
- License or school number
- Municipality and district

The code used for extraction and the JSON database can be [found on GitHub](https://github.com/codecadre/imt-school-addresses).

Additionally, we run this code as often as necessary to propagate any changes that exist on the IMT website.

Using the license number and school name, we cross-reference the address with the pass rates. Sometimes it is not possible to make this cross-reference, such as when the school name differs for the same license number, which may indicate that a school has closed and the license has been reused.

In cases where it was not possible to match the address with the pass rates, we list the school in the section ['No Data in IMT website'](https://passaprimeira.xyz/distritos-regioes/sem-info/).

### 3. Latitude and Longitude

In previous iterations of this project, the data was obtained through the Google Maps Geocoding API. However, the [usage policy](https://developers.google.com/maps/documentation/geocoding/policies) required displaying the schools only on Google Maps.

> You can display Geocoding API results on a Google Map, or without a map. If you want to display Geocoding API results on a map, then these results must be displayed on a Google Map. It is prohibited to use Geocoding API data on a map that is not a Google map.

For privacy reasons, we opted to use Leaflet and OpenStreetMap as the tile server, which required using a different geocoding service.

Therefore, we used the ESRI geocoding API to convert the postal code (CP7) obtained in the previous section into latitude and longitude. In cases where it was not possible to obtain the geographic coordinates, the schools are not displayed on the map. However, they are listed and properly marked as having missing latitude and longitude information.
