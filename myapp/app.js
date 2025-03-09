var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({ message: 'My name is Madison' })
});

app.listen(3000, function () {
  console.log('Test app listening on port 3000!');
});