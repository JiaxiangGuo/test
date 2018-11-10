var http = require('http')
http
    .createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('hello Node.js---branch hahahha');
        res.end();
    })
    .listen(80);