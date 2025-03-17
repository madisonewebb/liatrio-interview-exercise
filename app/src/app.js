// Import Express framework
var express = require('express');

// Create an Express application instance
var app = express();

// Ensure JSON responses are minified (removing unnecessary spaces)
app.set('json spaces', 0);

// Define route for the root URL ('/') that returns a JSON resonse
app.get('/', function (req, res) {

  // Generate timestamp in UNIX format (milliseconds)
  let timestamp = Date.now();

  // Send a JSON response with a message and dynamic timestamp
  res.json({ message: 'My name is Madison Webb' , timestamp: timestamp })

});

// Start the Express server on port 80
app.listen(80, function () {
  // Send log message when server is running
  console.log('Test app listening on port 80!');
});