/*
 var express = require('express');
 var path = require('path');
 var app = express();
 var rootPath = path.normalize(__dirname + '/../');
 app.use(express.static(rootPath + '/app'));
 app.listen(81);
 console.log('Listening on port 8000...');
 */

var express = require('express');
var app = express();
var portNumber = 88;

app.use(express.static(__dirname + '/../'));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.listen(portNumber);
console.log('Listening on port ' + portNumber + '...');


// var express = require('express');
// app = express();
// var router = express.Router();
// var path = require('path');
 
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.sendFile(path.join(__dirname, '../', 'index.html'));
// });
 
// module.exports = router;

// app.listen(50);