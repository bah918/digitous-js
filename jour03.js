var fruits = ["mango","lemon","blueberry",];
console.log(fruits);
console.table(fruits);
//02 Access
var ingredients = ["eggs","milk","butter"];
console.log(ingredients[1]);
//03 Add and Remove
var objects = ["pen", "book","lamp"];
//unshift ajoute un element au debut;
objects.unshift("chair");
console.log(objects);
objects.pop();
console.log(objects);
objects.push("laptop");
console.log(objects);
objects.shift();
console.log(objects);
//04 Order

var number = [4,10,8,12,6];
number.reverse();
console.log(number);
number=number.sort((a,b)=> a-b);
console.log(number);
//05 Boucle
var total = 0;
var limit = 10;
for(var i=0; i<=limit; i++){
     total=i+1;
    if(i===limit){
        total=i;
        console.log("total est= " +total);
    }
}
//06 Reverse
var sentence = "Hello Konexio !";
 var tab = [];
for(var i =1; i<=sentence.length; i++){
        tab += sentence.charAt(sentence.length-i);
        if (i===sentence.length){
            console.log(tab);
        }
       
           
}





