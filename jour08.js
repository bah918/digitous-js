//01 - Countries

var request = require("request");


var countriesNames = [];


request.get("https://restcountries.eu/rest/v1/all", function(err, res, getCountries){
    var resultat = JSON.parse(getCountries);
     var i = 0;
    while(i < resultat.length){
        countriesNames.push(resultat[i].name);
        i++;
    }
    console.log(countriesNames);
    console.log(countriesNames)
});


