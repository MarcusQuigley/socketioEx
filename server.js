
var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 5000;

app.get("/", function(request, response){
	var content = fs.readFileSync('template.html');
	response.setHeader("Content-Type", "text/html");
	response.send(content);
});

app.listen(port);
console.log("listening on port:", port);

