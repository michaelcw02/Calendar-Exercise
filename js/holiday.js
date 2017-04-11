
const http = require("http");
const fs = require('fs');
const net = require('net');

var port = 12233;
var pageURL = "https://holidayapi.com/v1/holidays?key=ea131354-c913-4ed4-8bb5-4673250727c2";

var server = http.createServer( (req, res) => {
    if(req.method === 'GET') {
        res.end('okay');
        console.log('okay');
    }
}) 
server.listen(port, '127.0.0.1');

console.log("Server running at 127.0.0.1:12233");
