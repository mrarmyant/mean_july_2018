var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response){
    response.render('index');
})

app.post("/users", function (request, response){
    var data = {
        full_name:request.body.full_name,
        location:request.body.location,
        language:request.body.lang,
        comment:request.body.comment,
    }
    response.render('results',{data:data});
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
});
