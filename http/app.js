var http = require('http')
http
    .createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<head><meta charset="utf-8"/></head>');
        res.write('<font color="red" size="1000">老婆我爱你！！！</font>');
        res.end();
    })
    .listen(80);