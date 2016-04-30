var songs = require('./songs')
var express = require('express');
var app = express();
app.get('/api/songs', function (req, res) {
  res.send(songs[Math.floor(Math.random()*songs.length)]);
  });
  app.listen(3000, function () {console.log('Example app listening on port 3000!')});
