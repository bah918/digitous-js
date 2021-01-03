 var test = new Date();

function formatDate(stringDate){
    var test = new Date(stringDate);
  console.log(`${test.getFullYear()}/${test.getMonth()+1}/${test.getDate()}`);
}
 
function formatDa(stringDate){
    var testD = new Date(stringDate);
    var age = new Date();
    console.log(age.getFullYear()-testD.getFullYear());

}
// calculateAge("01/02/1993");
formatDa("1993/02/01");


var prompt = require("prompt");

var schema = {
  properties: {
    name: {
      pattern: /^[a-zA-Z\s\-]+$/,
      message: 'Name must be only letters, spaces, or dashes',
      required: true
    },
    email :{
      pattern:/.{1,}@[^.]{1,}/,
      message: "peut etre pas le bon email",
    
      },
    password: {
      conform : function  ( value )  {
              
              if(value.length > 6 && value.search(/[a-zA-Z]/) > -1 && value.search(/[0-9]/) > -1 && value.search(/[$|@|%|*|+|-|_|!|]/) > -1){
                return true;
              }else{
                return false;
              }
              
                      
      } 
    }
  }
};
  prompt.start();
  prompt.get(schema, function (err, result) {
  
  console.log('Command-line input received:');
  console.log('  name: ' + result.name);
  console.log("Entrer votre mail :" +result.email);
  console.log('  password: ' + result.password);
});
