var express = require('express');  //  including the express library in the file
var app = express(); 	// instantiating the express library
// serve up the public folder as a default route``
app.use(express.static(__dirname + '/public'));

//app.get ('/', function(request, response) {
//	response.send ('Hello World');
//})

app.listen(3000, function() {
	console.log('server running on port 3000')
})
