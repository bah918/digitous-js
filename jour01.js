//01-HELLO WORLD
console.log("hello world!");
//02- String
var test = "My name is BAH";
console.log(test);
//03 Concatenation
var name= "BAH";
console.log("Nice to meet you " + name);
//04 String Length
var testLength = " I'm very long !";
console.log(testLength.length);
//05 Replace
var food = "croissant is meh";
console.log(food.replace("meh", "so good"));
//06-Up and Down
var basic = "This is cool";
var basicUp = basic.toUpperCase();
console.log(basicUp);
basic=basicUp;
var basicDown = basic.toLowerCase();
console.log(basicDown);
//08 Template
// .split(""): une string--->en tableau
//.split(" "); ---->mot/mot
var word = "banan";
var letters = word.split("");
console.log(letters);
var age = 27;
var template = "I'm_years old";
console.log(`I'm ${age} years old`);
// la template utilise les 
//bonus
var str = 'texte de chaînes de caractères';
//var res2 = str.substring(2);
var res1 = str.substring(8, 15);
console.log(res1);
var guill = "texte de chaînes de caractères";
console.log(str, guill);

