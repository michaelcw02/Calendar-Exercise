
const http = require("http");
const fs = require('fs');
const net = require('net');
const express = require('express');

var app = express();

var server = app.listen(3000, listening);

function listening() {
    console.log("listening on port 3000");
}

app.use( express.static( __dirname + '/..' ));

app.get( '/holiday/:country/:year', getHoliday );

function getHoliday(request, response) {
    let data = request.params;
    let country = data.country;
    let year = data.year;
    response.send(year + ', ' + country);
}


/*
var port = 12233;
var pageURL = "https://holidayapi.com/v1/holidays?key=ea131354-c913-4ed4-8bb5-4673250727c2";

var server = http.createServer( (req, res) => {
    if(req.method === 'GET') {
        console.log(req.url);
        res.write('okay');
        res.end();
    }
}) 
server.listen(port, '127.0.0.1');

console.log("Server running at 127.0.0.1:12233");
*/