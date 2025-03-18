// Import Express framework
var express = require('express');

// Create an Express app instance
var app = express();

// Minify JSON responses
app.set('json spaces', 0);

// Define route for the root URL ('/') that returns a JSON resonse
app.get('/', function (req, res) {
  let timestamp = Date.now();
  res.json({ message: 'My name is Madison Webb' , timestamp: timestamp })
});

app.listen(80, function () {
  console.log('Test app listening on port 80!');
});