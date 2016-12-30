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

app.use(express.static(__dirname + '/../'));

app.get('/', function (req, res) {
    res.redirect('/index.html');
});

app.listen(82);
console.log('Listening on port 82...');
