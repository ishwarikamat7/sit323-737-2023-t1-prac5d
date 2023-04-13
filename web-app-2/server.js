var express = require('express')
var app = express()

const PORT = 3001;
app.get('/', function(req,res) {
    res.send('hello world from web-app-2');
});

app.listen(PORT)