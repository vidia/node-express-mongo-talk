var http = require("http");

var server = http.createServer(function(request, response) {
  if(request.method == "GET") {
    if(request.url == "/") {
      response.write("Hello world");
    }
  }
  response.end();
});

server.listen(3000, 'localhost');
