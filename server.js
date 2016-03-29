var express = require('express');
var app = express();
var bodyParser = require('body-parser');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname));


app.post('/postData', function(req, res) {
  console.log('clocked in', req.body);
  res.send();
});

app.post('/clockin', function(req, res) {
  console.log('clocked in', req.body);
  res.send();
});

app.post('/startLunch', function(req, res) {
  console.log('starting lunch ', req.body);
  res.send();
});

app.post('/endLunch', function(req, res) {
  console.log('ending lunch', req.body);
  res.send();
});

app.post('/clockout', function(req, res) {
  console.log('clocked out', req.body);
  res.send();
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
})
