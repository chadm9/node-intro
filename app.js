//include http module

var http = require('http');  //include http object


//include fs module. the file system module. this is a part of core
var fs = require('fs');

//set up server, createServer is a method of the http object

var server = http.createServer(function (req, res) {
   console.log('someone connected to the internet');
   console.log(req.url);

   res.writeHead(200, {'content-type': 'text/html'});
   if(req.uri == '/'){
       var theHomePageHTML = fs.readFileSync('homePage.html');
       res.end(theHomePageHTML);
   }else if(req.uri == '/movie-app'){
       var theHomePageHTML = fs.readFileSync('movie-app.html');
       res.end(theHomePageHTML);
   }else{
       res.end('<h1>404 ERROR</h1>')
   }


});

var port = 8001;
server.listen(port);
console.log('server is listening for http traffic on port' + port + '...');
