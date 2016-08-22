var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.port || 3000;
var mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(express.static('src/public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});


app.listen(port);