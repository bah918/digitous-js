var fs=require("fs");

fs.readFile("./jour7.txt", function (err, data) {
    
 
    console.log("Affichage du contenu: " + data);
    
 });
 //02 Map double
  
 function mapDouble(array){
     return array.map(function(element){
         return element*2;
     })
 }
 var array = [1,2,3,4,5];
 console.log(mapDouble(array));      

