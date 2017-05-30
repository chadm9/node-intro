
var http = require('http');
var fs = require('fs');

var server = http.createServer((req,res)=>{
    console.log('Someon connected via http');
})

server.listen(8080);

console.log('listening on port 8080');
