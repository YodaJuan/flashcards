var express = require('express');  //  including the express library in the file
var bodyParser = require('body-parser');
var app = express(); 	// instantiating the express library

// serve up the public folder as a default route``
app.use('/', express.static(__dirname + '/public'));

// GET /static/style.css etc.
app.use('/static', express.static(__dirname + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

var flashcards = [];

app.post('/', function(request, response) {
	//response.send('Message received.' + request.toString());
	var params = request.body;
	flashcards.push(params);
	console.log(params);
response.redirect('/');
});

app.get('/myflashcards', function(request, response) {
   response.send(flashcards);
});
//app.get ('/', function(request, response) {
//	response.send ('Hello World');
//})

app.listen(3000, function() {
	console.log('server running on port 3000')
})


