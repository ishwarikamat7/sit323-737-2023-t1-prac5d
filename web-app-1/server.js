var express = require('express')
var app = express()

const PORT = 3000;
app.get('/', function(req,res) {
    res.send('hello world from web-app-1');
});

app.listen(PORT)