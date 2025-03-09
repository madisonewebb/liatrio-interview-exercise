var express = require('express');
var app = express();
app.set('json spaces', 0);

app.get('/', function (req, res) {
  res.json({ message: 'My name is Madison' , timestamp: (new Date()).toISOString() })
});

app.listen(3000, function () {
  console.log('Test app listening on port 3000!');
});