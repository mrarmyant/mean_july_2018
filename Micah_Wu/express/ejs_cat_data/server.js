var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get("/", function (request, response){
  response.render('index');
})

app.get("/cat/1", function (request, response){
  var cat_des = {name: 'Kit Cat', food : 'Candy Bars', age : 3, sleeps : ['in the closet','under the bed']}
  response.render('details',{cat:cat_des});
})
app.get("/cat/2", function (request, response){
  var cat_des = {name: 'Garfield', food : 'Lasagna', age : 8, sleeps : ['on the bed','living room couch']}
  response.render('details',{cat:cat_des});
})
app.get("/cat/3", function (request, response){
  var cat_des = {name: 'Meow Zedong', food : 'Chinese', age : 15, sleeps : ['in your bed','in the bathroom']}
  response.render('details',{cat:cat_des});
})

app.listen(8000, function() {
  console.log("listening on port 8000");
})