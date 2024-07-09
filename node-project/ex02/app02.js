var http = require('http');
require('fs');

var port = 9090;
var server = http.createServer(function(req, res) {
    console.log(req.url);

    if(req.url  === '/'){
        req.url = '/index.html';
    }

    fs.readFile(__dirname + '/public' + req.url, function(error, data){
        res.writeHead(200, {
            'Content-Type': 'text/html'
        })
    });
    res.end('<h1>Hello World</h1>');

   
});

server.listen(port, function(){
    console.log('server: starts...[' + port + ']');
});

