// O1 Number
var integer = 102;
var float = 13.9;
console.log(`integer est : ${integer} float est :  ${float}`);
console.log("Les deux valeurs est", integer,"&&", float);
// 02 Convert
var basic = 34;
var stringified =basic.toString();
// "xx".toString converti un nb en chaine de caractere
console.log(stringified); 
// 03 Round
var num = 1.5
var rounded = Math.round(num);
console.log(rounded);
// 05 Arithmetique
var test = 12;
var bis = 5;
console.log(test * bis);
console.log( test + bis);
console.log(test - bis);
console.log(test / bis)
console.log(test % bis);
var test = 143;
var bis = 219;
console.log(bis > test);//---->true;
console.log(bis >= test);//---->true
console.log(bis < test);//-----false
console.log(bis <= test);//------false
console.log(bis === test);//----false
console.log(bis == test);//----false
// 06 condition
var limit = 50;
var score = 64;
if(score >= limit){
    console.log("ok good !");
}else{
    console.log("Oh nooo...");
}
// OK goog
// en changent la valeur du resultat
var limit = 64;
var score = 50;
if(score >= limit){
    console.log("ok good !");
}else{
    console.log("Oh nooo...");
}
// oh nooo..
// 07 condition
var password = "azerty";
if(password.length > 5){
    console.log("The password is secure");
}
// The password is secure
// 08 Condition III
if(score >= limit && password.length > 5){
        console.log("Everything is good");
}else if (score >= limit || password.length > 5){
            console.log("Something is good");
}
       
else {
        (score >= limit || password.length > 5)
            console.log("Nothing is good");
}
// Bonus 

var max = 6;
var min = 1;
 var randum = Math.floor(Math.random() * (6 - 1 + 1) + 1);
 if (randum == 6){
     console.log("Yes I win !");
     console.log("randum est :", +randum);
 } else {
     console.log("So close...");
     console.log("randum est :", +randum);
 }
