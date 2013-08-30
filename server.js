
var port = process.env.PORT || 5000;


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

app.get("/", function(request, response){
	var content = fs.readFileSync('template.html');
	response.setHeader("Content-Type", "text/html");
	response.send(content);
});


io.sockets.on('connection', function(socket){
	console.log("set up socket", socket);
	var delay=1000
	for(var i=0;i<50;i++){//  arr.map(function(cnt){
		(function(s){
		 	setTimeout(function(){
				socket.emit('news', { 'value': s });
				console.log(s);
			}, delay);
		})(i);
	delay+=1000;
	}		
	
});




