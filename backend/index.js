var express = require('express');
var sqlite3 = require('sqlite3').verbose();
var app = express();
var port = 3000;
var db = new sqlite3.Database('./db/games.db', function (err) {
    if (err) {
        return console.error(err.messsage);
    }
    console.log('Database opened');
});
db.close(function (err) {
    if (err) {
        return console.error(err.messsage);
    }
    console.log('Database closed');
});
app.get('/', function (req, res) {
    res.send('<H1>RRR test</H1>');
});
app.listen(port, function () {
    console.log("RRR at http://localhost:".concat(port));
});
