var fs=require("fs");

fs.readFile("./jour7.txt", function (err, data) {
    
 
    console.log("Affichage du contenu: " + data);
    
 });
 //02 Map double
 var array = [1,2,3,4,5];
 function mapDouble(array){
     return array.map(function(element){
         return element*2;
     })
 }
 
 console.log(mapDouble(array)); 
 
 //03 Map-Names
 var longNames=[
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]
 
var shortNames = longNames.map(function(choix){
	 if(choix.firstName && choix.lastName){
		return (`{name :"${choix.firstName + choix.lastName}"}`);
	 }

})


console.log(shortNames);



