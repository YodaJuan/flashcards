var express = require('express');  //  including the express library in the file
var bodyParser = require('body-parser');  	// library that parses request body
var app = express(); 	// instantiating the express library

// serve up the public folder as a default route``
app.use('/', express.static(__dirname + '/public'));

// GET /static/style.css etc.
app.use('/assets', express.static(__dirname + '/public/assets'));

app.set('view engine', 'pug')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Store flashcards entered by the user
var flashcards = { cards: [] };

app.post('/', function(request, response) {
	var params = request.body;
	flashcards.cards.push(params);
	console.log(params);
response.redirect('/');
});

// render flashcard template using jade/pub
app.get('/myflashcards', function (req, res) {
    res.render('myflashcards.pug', flashcards);
});

// render json of flashcards
app.get('/myflashcardsraw', function(request, response) {
   response.send(flashcards.cards);
});

app.listen(3000, function() {
	console.log('server running on port 3000')
});