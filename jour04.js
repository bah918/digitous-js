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
    var nouv = 0;
    for(var i = 1; i<=6; i++){
         var nouv = nouv + num;
          if(i===6){
              num=nouv+i;
              console.log(`${num}`);
              break;
          }
    }
    
}
addUp(12);

// 06-Time
var h = 0;
var m = 0;
var s = 0;
function format (num){
    for (var i = num; i >= 0; i--){
        if(i===3600){
           h = h + 1;
           num = num - i;
           for(var i=num; i >= 0; i--){
                if(i===60){
                    num = num - i;
                    m = m + 1;
                    s=num + s
                }
                
                
                
           }
        }
    }
    console.log(`${h} h : ${m} m : ${s} s`);
}

format(3700);