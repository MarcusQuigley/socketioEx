
//var express = require('express');
//var server = require('http');
//var io = require('socket.io');
//var app = express();
var port = process.env.PORT || 5000;
//server.createServer(app);
//io.listen(server);
//server.listen(port);

var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});


server.listen(port);

console.log("listening on port:", port);
var count = 50;
var timeout = 100;
var fs = require('fs');
var arr = [count];
//var port = process.env.PORT || 5000;

app.get("/", function(request, response){
	var content = fs.readFileSync('template.html');
	response.setHeader("Content-Type", "text/html");
	response.send(content);
});


io.sockets.on('connection', function(socket){
	console.log("set up socket", socket);
	arr.map(function(cnt){
		(function(s){
		 	setTimeout(function(){
				socket.emit('news', { 'value': cnt });
				console.log(cnt);
			}, 100);
		})(count);
//		socket.emit('news', { 'value': count });
	});		
	

	//socket.on('my other event', function (data) {
	  //  console.log(data);
//	});


//	arr.map(function (item){
//		socket.emit('tweet',item )
//		console.log(item);
//	});
});

//app.listen(port);
//console.log("listening on port:", port);




