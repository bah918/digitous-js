function calculer(entier1, entier2, operateur){
     switch(operateur){
         case "x":
            console.log(entier1 * entier2);
            break;
         case  "+":
                console.log(entier1 + entier2);
                break;
         case "/":
                console.log(entier1 / entier2);
                break;
        case "-":
                console.log(entier1 - entier2);
                break;
        case "%":
                console.log(entier1 % entier2);
                break;      
     }
    
}
console.log(process.argv);

if (process.argv.length >= 6){
    console.log("Erreur entrer 3 arguments svp !");

}else {
    console.log("Entrer vos arguments :");
}
calculer(process.argv[2],process.argv[3],process.argv[4]);
//calculer(4 , 6 , "+");