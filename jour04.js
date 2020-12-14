//## 01 - Object jour04
var cat ={
    name : "Garfield",
    age : 3,
    isCute : "true",
};
console.log(cat);
console.log(cat.age);
console.log(cat["age"]);
if(cat.isCute==="true"){
    console.log("affichez So cute !");
}
//02 - Combine
var cat2 ={
    name : "konexio",
    age : 27,
    isCute : "false",
    var : "justeComprendre",
};
var cats=Object.assign(cat,cat2);
console.log(cats);
console.log(cat.age);
// age = 27
console.log(cat2.isCute);
// isCute = "false"
// 03 - Even
function checkIfEven (num) {
    if(num%2===0){
        console.log("even");
    }else{
        console.log("odd");
    }  
}

for (var i =0; i<7; i++){
    console.log(`${i} fois`);
    console.log("le nombre est impair")
       checkIfEven(75);
       console.log("le nombre est pair")
       checkIfEven(80);
   }

//04 - Compare
function Compare(num1,num2){
    if(num1 > num2){
        console.log("num1 is bigger");
    }else if(num2 > num1){
        console.log("num2 is bigger");
    }else{
        console.log("both are the same");
    }
}
Compare(94 , 200);
Compare(200 , 94);
Compare(94 , 94);

// 05 - Add Up
function addUp(num){
    
    for(var i = 0; i<=num; i++){
          if(i===num){
              num=num+i;
              console.log(num);
          }
    }
    
}
addUp(12);
