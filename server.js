
var express = require('express');
var server = require('http');
var io = require('sockets.io');
var app = express();
server.createServer(app);
io.listen(server);
server.listen(port);

var fs = require('fs');
var port = process.env.PORT || 5000;

app.get("/", function(request, response){
	var content = fs.readFileSync('template.html');
	response.setHeader("Content-Type", "text/html");
	response.send(content);
});

//app.listen(port);
console.log("listening on port:", port);

