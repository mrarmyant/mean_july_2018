var express = require("express");
var app = express();
var session = require('express-session');

app.use(session({
  secret: 'noneya',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}));


app.get("/", function (req, res){
    if (session['counter'] == null){
        session['counter']=1;
    }else{
        session['counter']+=1;
    }

    res.render('index',{counter:session['counter']});
})

app.post("/increment", function (req, res){
    session['counter']+=1
    res.redirect('/');
})

app.post("/reset", function (req, res){
    session['counter']=0;
    res.redirect('/');
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.listen(8000, function() {
    console.log("listening on port 8000");
});
