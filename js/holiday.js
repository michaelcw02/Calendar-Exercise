
const https = require("https");
const fs = require('fs');
const net = require('net');

var port = 12255;
var pageURL = "https://holidayapi.com/v1/holidays?key=ea131354-c913-4ed4-8bb5-4673250727c2";

var server = https.createServer( (req, res) => {
    if(req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('okay');
    }
}) 
server.listen(port, '127.0.0.1');


