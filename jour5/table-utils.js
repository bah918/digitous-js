//multiplication
function multiply(entier ){
    for(var i = 0; i<=10; i++){
        console.log(`${i} x ${entier} = `+i*entier);
    }
}
//multiply(6);
// addition
function addition(entier){
    for(var i = 0; i<=10; i++){
        console.log(`${i} + ${entier} =  ${i+entier}`);
    }
}
//addition(4);
module.exports=addition;
//module.exports={multiply,addition};
