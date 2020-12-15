function calculate(entier1, entier2, opera){
      if (opera==="*"){
          console.log(entier1 * entier2);
      }else if(opera==="-"){
        console.log(entier1 - entier2);
      }else if(opera==="+"){
        console.log(entier1 + entier2);
      }else if(opera==="%"){
        console.log(entier1 % entier2);
      }else{
        console.log(entier1 / entier2);
      }
}
console.log(process.argv);
console.log("precisez deux nombres et un operateur :")
if (process.argv.length>=6){
    console.log("erreur, il faut donner 3 arguments :");

}else{
    calculate(process.argv[2], process.argv[3], process.argv[3]);
}
  