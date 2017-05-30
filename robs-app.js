// Include the http module.
var http = require("http");
// Include the fs module. fs = file system. Part of core!! Yay!
var fs = require("fs");

var server = http.createServer((req, res)=>{
	console.log("Someone connected to the server!!");
	console.log(req.url);

	if(req.url == '/'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./homePage.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/movie-app'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./movie-app.html');
		res.end(theHomePageHTML);
	}else if(req.url == './image-gallery'){
		res.writeHead(200,{'content-type': 'text/html'});
		var theHomePageHTML = fs.readFileSync('./image-gallery.html');
		res.end(theHomePageHTML);
	}else if(req.url == '/js/scripts.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./js/scripts.js');
		res.end(theHomePageHTML);
	}else if(req.url == '/js/config.js'){
		res.writeHead(200,{'content-type': 'application/javascript'});
		var theHomePageHTML = fs.readFileSync('./js/config.js');
		res.end(theHomePageHTML);	
	}else if(req.url == '/css/styles.css'){
		res.writeHead(200,{'content-type': 'text/css'});
		var theHomePageHTML = fs.readFileSync('./css/styles.css');
		res.end(theHomePageHTML);
	}else{
		res.writeHead(404,{'content-type': 'text/html'});
		res.end("<h1>404 ERROR</h1>");
	}
});

// Tell the server we created above to listen to port 8000.
// Whenever someone makes an HTTP request to port 8000, our
// callback (with req, and res) will fire.
var port = 8001;
server.listen(port);
console.log("Server is listening for HTTP traffice on port " + port + '...');
