var express = require('express');

console.log('Lets find out what express is', express);

var app = express();

console.log('Lets find out what app is', app);


app.get('/', function (request, response) {
    console.log(' this is the request object', request);
    console.log(' this is the response object', response);

    response.send("<h1>hello express</h1>");


} );

app.listen(666, function (){
    console.log('listing on port 666');
});