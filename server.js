
var express = require('express');
var app = express();

var port = process.env.Port||5000;

app.get("/", function(request, response){
	response.setHead("Content-Type", "text/html");
	response.send("Hello from sockets example");
});

app.listen(port);
console.log("listening on port:", port);

