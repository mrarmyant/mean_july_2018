// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
  // see what URL the clients are requesting:
  console.log('client request URL: ', request.url);
  // this is how we do routing:
  if(request.url === '/') {
    fs.readFile('views/index.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/cars/") {
    fs.readFile('views/cars.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/cats/") {
    fs.readFile('views/cats.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  else if (request.url === "/cars/new/") {
    fs.readFile('views/new.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-type': 'text/html'});
      response.write(contents);
      response.end();
    });
  }
  //Car pics
  else if(request.url === '/images/ae86.jpg'){
    fs.readFile('./images/ae86.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/rsti.jpg'){
    fs.readFile('./images/rsti.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/rx7.jpg'){
    fs.readFile('./images/rx7.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/porsche.jpg'){
    fs.readFile('./images/porsche.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }

  //Cat pics
  else if(request.url === '/images/space_cat.jpg'){
    fs.readFile('./images/space_cat.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/fire_cat.jpg'){
    fs.readFile('./images/fire_cat.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/high_cat.jpg'){
    fs.readFile('./images/high_cat.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  else if(request.url === '/images/space_cat2.jpg'){
    fs.readFile('./images/space_cat2.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
    })
  }
  // request didn't match anything:
  else {
    response.end('File not found!!!');
  }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");
