

//bring in http module
var http = require("http");
//console.log(http);

var server = http.createServer(function (request, response) {
    //console.log(request);
    response.writeHead(200, {'content-type': 'text/html'});

    response.write('<h1>Hello visitor. This is YOUR node server</h1>');
    response.end();


});

server.listen(8000); //listen for connections on port 8000

console.log('NodeJs is listening for connections.');



