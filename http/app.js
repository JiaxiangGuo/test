var http = require('http')
http
    .createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('老婆我爱你！！！', "utf-8");
        res.end();
    })
    .listen(80);