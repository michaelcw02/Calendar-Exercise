const express = require('express');
var HolidayAPI = require('node-holidayapi');

var key = 'ea131354-c913-4ed4-8bb5-4673250727c2';
var parameters = {
    // Required
    'country': 'US',
    'year': 2016,
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

app.use(express.static(__dirname));

app.get('/holiday/:country/:year/:month?/:day?/:previous?/:upcoming?/:public?/:pretty?', getHoliday);

function getHoliday(request, response) {
    let data = request.params;
    addDataToParameters(data);
    hapi.holidays(parameters, (error, data) => {
        if (error) {
            response.send('there was an error!');
        }
        if (data) {
            console.log(data);
            response.send(data);
        }
    })
}

function addDataToParameters(data) {
    if (data.country)
        parameters['country'] = data.country;
    if (data.year)
        parameters['year'] = data.year;
    if (data.month)
        parameters['month'] = data.month;
    if (data.day)
        parameters['day'] = data.day;
    if (data.previous)
        parameters['previous'] = data.previous;
    if (data.upcoming)
        parameters['upcoming'] = data.upcoming;
    if (data.public)
        parameters['public'] = data.public;
    if (data.pretty)
        parameters['pretty'] = data.pretty;
}