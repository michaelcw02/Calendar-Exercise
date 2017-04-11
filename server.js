const express = require('express');
var HolidayAPI = require('node-holidayapi');
var hapi = new HolidayAPI('_YOUR_API_KEY_').v1;

var parameter = {
  // Required
  country: 'US',
  year:    2016,
  // Optional
  // month:    7,
  // day:      4,
  // previous: true,
  // upcoming: true,
  // public:   true,
  // pretty:   true,
}


var app = express();



var server = app.listen(3000, listening);

function listening() {
    console.log("listening on port 3000");
}

app.use( express.static( __dirname + '/..' ));

app.get( '/holiday/:country/:year/:month/:day/:previous/:upcoming/:public/:pretty', getHoliday );

function getHoliday(request, response) {
    let data = request.params;
    
    response.send(year + ', ' + country);
}

function addParamsToObject(data) {
    parameter[country] = data.country;
    parameter[year] = data.year;
    parameter[month] = data.month;
    parameter[day] = data.month;
    parameter[previous] = data.month;
    parameter[upcoming] = data.month;
    parameter[public] = data.month;
    parameter[pretty] = data.month;
}