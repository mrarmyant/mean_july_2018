// Required Modules
var express = require("express"),
    path = require('path'),
    http = require('http').Server(app);
    bodyParser = require('body-parser'),
    expressLayouts = require('express-ejs-layouts');

var app = express();                         // invoke express and stores into a app

// Required Middlewares...
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Required Endpoint Routes
app.get('/', (req, res) => { res.render('Index'); });

// Clients connection port access config...
var port = process.env.PORT || 8000;         //holds the arbitrary port for serveer
var server = app.listen(port, () => { console.log(`Running in localhost at port ${port}`); });
var io = require('socket.io').listen(server);// invoke io socket connection

io.sockets.on('connection', (socket) => {
   console.log("\n=> Client/socket is connected!");
   console.log("=> Client/socket id is: ", socket.id);

   // Handles Incoming Socket Events from the "Client Side" - "FORM"
   socket.on('sending_form', (data) => {
      console.log(data);
      socket.emit('receive_data', data);
   });
   // DisconnectEvent
   socket.on('disconnect', () => { console.log(':> Client disconnected'); });
});
