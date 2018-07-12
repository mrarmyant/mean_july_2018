var express = require("express");
var app = express();
var session = require('express-session');

app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set('views', __dirname + '/static/views'); 
app.set('view engine', 'ejs');


app.get('/', function(request, response) {
    if (requst.session.counter){
        request.session.counter += 1;
    }
    else{
        request.session.counter = 1;
    }
    response.render('counter', {session:request.session});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})