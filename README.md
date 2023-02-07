# Nutrition Daily Values API
This API provides the recommended Daily Values (DV) for nutrients.

## Per the FDA...
Daily Values are comprised of two sets of reference values for reporting nutrients in nutrition labels—the Daily Reference Values (DRVs) and the Reference Daily Intakes (RDIs). To limit consumer confusion, the single term “Daily Value” is used to designate both the DRVs and RDIs. The DVs are used to calculate the % Daily Values that consumers see on the Nutrition and Supplement Facts labels. The % Daily Value helps consumers understand how the amount of a nutrient that is present in a serving of a food fits into their total daily diet, and allows them to compare the nutritional value of food products.

**Link to project:** https://nutrition-daily-values-api.onrender.com

![screenshot of API website HTML](https://user-images.githubusercontent.com/98281798/215303483-f5870fad-c72f-4da6-8fac-4dfda6d339b5.PNG)

## How It's Made:

**Tech used:** HTML, Express.js, Node.js

## How to Use This Repo

**Install dependencies** - npm install

**Run Server** - node server

**Access API** - http://localhost:8000/api

Each Nutrient object includes keys for:

* Unit of measurment: unitOfMeasure
* Recommended DV for ages > 4: olderThan4
* Recommended DV for 0 - 12 months: birthTo12Months
* Recommended DV for 1 - 3 years: age1To3Years
* Recommended DV for pregnant or lactating: pregOrLactating


## Optimizations
*(pending)*
