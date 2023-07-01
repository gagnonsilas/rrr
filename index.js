var express = require('express');
var sqlite3 = require('sqlite3');
var app = express();
var port = 3000;
app.get('/', function (req, res) {
    res.send('<H1>RRR test</H1>');
});
app.listen(port, function () {
    console.log("RRR at http://localhost:".concat(port));
});
