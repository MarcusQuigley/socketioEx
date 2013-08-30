
var port = process.env.PORT || 5000;
var twitter = require('ntwitter');
var credentials = require('./credentials.js');

var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});


server.listen(port);

console.log("listening on port:", port);

var twit = new twitter({
	consumer_key: credentials.consumer_key,
        consumer_secret: credentials.consumer_secret,
        access_token_key: credentials.consumer_access_token_key,
        access_token_secret: credentials.consumer_access_token_secret
});

var fs = require('fs');

app.get("/", function(request, response){
	var content = fs.readFileSync('template.html');
	response.setHeader("Content-Type", "text/html");
	response.send(content);
});


//io.sockets.on('connection', function(socket){
//	console.log("set up socket", socket);
	twit.stream('statuses/filter', {track: ['nick cave']},
		function(stream) {
			stream.on('data', function(tweet){
				console.log(tweet);
//				socket.emit('tweetBroadcast', { 'value': 'tweet' });
			});
	
		});		

			
	
//});




