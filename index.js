var http = require('http');

var server = http.createServer(function(req,resp){
   resp.writeHead(200, {'content-type':'text/html'});
   resp.end('Hello world');
}).listen(8080);

console.log("server started at %s", server.address().port);
