var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendfile(path.join(__dirname, '../public', 'index.html'));
});


app.listen(port);