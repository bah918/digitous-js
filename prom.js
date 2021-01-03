
    var prompt = require("prompt");
    var schema = {
      properties: {
        name: {
          pattern: /^[a-zA-Z\s\-]+$/,
          message: 'Name must be only letters, spaces, or dashes',
          required: true
        },
        password: {
          hidden: true
        }
      }
    };
    prompt.start();
    prompt.get(schema, function (err, result) {
      console.log('Command-line input received:');
      console.log('  name: ' + result.name);
      console.log('  password: ' + result.password);
    });
    
   

