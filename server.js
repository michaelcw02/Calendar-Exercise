const express = require('express');
var HolidayAPI = require('node-holidayapi');

var key = 'ea131354-c913-4ed4-8bb5-4673250727c2';
var parameters = {
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
var hapi = new HolidayAPI(key).v1;


var app = express();



var server = app.listen(3000, listening);

function listening() {
    console.log("listening on port 3000");
}

app.use( express.static( __dirname ));

app.get( '/holiday/:country/:year/:month?/:day?/:previous?/:upcoming?/:public?/:pretty?', getHoliday );

function getHoliday(request, response) {
    let data = request.params;
    addDataToParameters(data);
    hapi.holidays(parameters, (error, data) => {
        if(data) {
            console.log(data);
            response.send(data);
        }
        else
            response.send(undefined);
    })
}

function addDataToParameters(data) {
    parameters[country] = data.country;
    parameters[year] = data.year;
    parameters[month] = data.month;
    parameters[day] = data.month;
    parameters[previous] = data.month;
    parameters[upcoming] = data.month;
    parameters[public] = data.month;
    parameters[pretty] = data.month;
}