var http = require('http');
var fs = require('fs');

//creating server with "callback" = (function inside a function)
var server = http.createServer(function (request, response){
    console.log('client request URL: ', request.url);

//linking cars.html page
    if(request.url === '/cars') {
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

//linking css boostrap grid
    else if(request.url === '/stylesheets/bootstrap-4.1.1-dist/css/bootstrap-grid.css'){
        fs.readFile('./stylesheets/bootstrap-4.1.1-dist/css/bootstrap-grid.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }

//linking css bootstrap
    else if(request.url === '/stylesheets/bootstrap-4.1.1-dist/css/bootstrap.css'){
    fs.readFile('./stylesheets/bootstrap-4.1.1-dist/css/bootstrap.css', 'utf8', function(errors, contents){
        response.writeHead(200, {'Content-type': 'text/css'});
        response.write(contents);
        response.end();
    })
    }

//linking first car image
    else if(request.url === '/images/01-2017-acura-nsx.jpg'){
        fs.readFile('./images/01-2017-acura-nsx.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

//linking second car image
    else if(request.url === '/images/LamborghiniRoadsterTA.jpg'){
        fs.readFile('./images/LamborghiniRoadsterTA.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

//linking 3rd car image
    else if(request.url === '/images/mclaren.jpeg'){
        fs.readFile('./images/mclaren.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

//linking cat html page
    else if(request.url === '/cats') {
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

//linking 1st cat image
    else if(request.url === '/images/cat-lying-on-side.jpg'){
        fs.readFile('./images/cat-lying-on-side.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/scared-kitten.jpg'){
        fs.readFile('./images/scared-kitten.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/scared-kitten2.jpg'){
        fs.readFile('./images/scared-kitten2.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === "/cars/new") {
         fs.readFile('views/form.html', 'utf8', function (errors, contents){
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents); 
             response.end();
         });
    }

//any other url hyperlink that doesnt match, respond with "File not found"
    else {
        response.end('File not found!!!');
    }
});

//locate what port you want it to listen from and respond back to terminal what port it is.
server.listen(7077);
console.log("Running in localhost at port 7077");
