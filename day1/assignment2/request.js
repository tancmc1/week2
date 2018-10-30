var request = require('request');
var fs = require('fs');

request.get("http://sytantris.github.io/http-examples/future.jpg")
    .on('error', function (err) {
      throw err;
    })
    .on('response', function (response) {
      console.log('Response Status Message: ', response.statusMessage);
      console.log('Response Content Type: ', response.headers['content-type'])
      console.log('Downloading Image...');
    })
    .on('end', function() {
      console.log('Download Complete');
    })
    .pipe(fs.createWriteStream('./future.jpg'));
