function multiply(entier){
    for(var i = 0; i<=10; i++){
        console.log(`${i} x ${entier} = `+i*entier);
    }
}
console.log(process.argv);
multiply(process.argv[2], process.argv[3], process.argv[4]);
if(process.argv.length>=4){
    console.log("erreur donner un argument :")
}else {
    console.log("entrer un entier :")
}