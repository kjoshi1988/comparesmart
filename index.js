var http = require('http');

http.createServer(function(req,resp){
   resp.writeHead(200, {'content-type':'text/html'});
   resp.end('Hello world');
}).listen(1337);

console.log("server started");
