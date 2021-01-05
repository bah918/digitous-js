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
    i=0;
    while(i < countriesNames.length){
            countriesNames[i]=`${countriesNames[i]}-`;
            i++;
            //join("-")
    }
    countriesNames=JSON.stringify(countriesNames);
    console.log(countriesNames);
});
console.log("Debut de l'exercice 2");
//## 02 - Chuck Norris
function getFact(blagounette) {
    request.get("https://api.chucknorris.io/jokes/random", function (error, response, body) {
        var blague = JSON.parse(body);
        console.log(blague);
    });
};
getFact();



