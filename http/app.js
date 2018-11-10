var http = require('http')
http
    .createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<head><meta charset="utf-8"/></head>');
        res.write('<h1><font color="red">老婆我爱你！！！</font></h1>');
        res.end();
    })
    .listen(80);