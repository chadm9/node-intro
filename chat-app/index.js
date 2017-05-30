
var http = require('http');
var fs = require('fs');

var usersLoggedOn = [];

//include socket.io which was installed by npm.  It is not a part of core.

var socketio = require('socket.io');

var server = http.createServer(function(req,res){
    console.log('Someone connected via http');
    fs.readFile('index.html', 'utf-8',function(error,data){
       //console.log(error);
       //console.log(data);
       if(error){
           res.writeHead(500,{'content-type': 'text-html'});
           res.end(error);
       }else{
           res.writeHead(200,{'content-type': 'text-html'});
           res.end(data);
       }
    });


});

var io = socketio.listen(server);
//handle socket connection
io.sockets.on('connect', function (socket) {
    console.log('someone connected via socket.');
    //console.log(socket);

    socket.on('nameToServer', function (name) {
        //console.log(name + ' just joined');
        usersLoggedOn.push(name);
        io.sockets.emit('newUser', name);

    });

    socket.on('sendMessage', function () {
        console.log('someone clicked the button.')
    });

    socket.on('messageToServer', function (message) {
        io.sockets.emit('messageToClient', message.usermessage + ' --' + message.username);
    });

});

server.listen(8080);

console.log('listening on port 8080');
