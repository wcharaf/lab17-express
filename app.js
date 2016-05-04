var songs = require('./songs')
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/api/songs', function (req, res) {
  res.send(songs[Math.floor(Math.random()*songs.length)]);
});
  app.listen(3000, function () {console.log('Example app listening on port 3000!')});



var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s%s', host, port);
});
