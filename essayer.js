var prompt = require('prompt');

prompt.start();  // start the prompt

prompt.get(['username', 'email'], function (err, result) {  // get 2 properties username and email
  if (err) { return onErr(err); }
  console.log('Command-line input received:');
  console.log('  Username: ' + result.username);  // log results
  console.log('  Email: ' + result.email);
});

function onErr(err) {
  console.log(err);
  return 1;
}