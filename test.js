var express = require('express')
var app = express();

// Specific Version
// app.use('/frontend',require('./index.js')({version:5}));

// Random Version (default)
app.use('/frontend',require('./index.js')({version:'random'}));
app.use('/frontend',express.static('/'))

var http = require('http').createServer(app).listen(290)

require('request')({
    url: 'http://127.0.0.1:290/frontend'
}, function(err, obj, body) {
    console.log(body)
    process.exit()
})