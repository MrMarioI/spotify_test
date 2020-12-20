var express = require('express');
var router = express.Router();

// To receive Spotify data

// router.get('/login', function(req, res) {
//   var scopes = 'user-read-private user-read-email';
//   res.redirect('https://accounts.spotify.com/authorize' +
//     '?response_type=code' +
//     '&client_id=' + my_client_id +
//     (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//     '&redirect_uri=' + encodeURIComponent(redirect_uri));
//   });

/* GET home page. */

router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
