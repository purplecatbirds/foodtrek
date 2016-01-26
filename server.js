var express = require('express');
var server = express();

server.use(express.static(__dirname));

server.listen(8000, function() {
    console.log('SERVER POWERED OVER 8000');
});