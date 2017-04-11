const express = require('express');
var HolidayAPI = require('node-holidayapi');

var key = 'ea131354-c913-4ed4-8bb5-4673250727c2';   //TEST API KEY
//var key = 'e3b4a9ba-697c-4bfa-a3b6-d0c499f3da02';   //LIVE API KEY
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

app.get('/holiday/:country/:date/:previous?/:upcoming?/:public?/:pretty?', getHoliday);

function getHoliday(request, response) {
    let data = request.params;
    addDataToParameters(data);
    hapi.holidays(parameters, (error, data) => {
        if (error)
            response.send(error);
        if ('object' === typeof data) {
            console.log(data);
            response.send(JSON.stringify(data));
        }
    })
}

function addDataToParameters(data) {
    if (data.country)
        parameters['country'] = data.country;
    let date = new Date(data.date);
    if(date)
        parameters['year'] = date.getFullYear();
    //ALL THESE ARE NOT NEEDED FOR THIS EXERCISE
    /*
        parameters['month'] = date.getMonth() + 1;
        parameters['day'] = date.getDate();
        parameters['previous'] = data.previous;
        parameters['upcoming'] = data.upcoming;
        parameters['public'] = data.public;
        parameters['pretty'] = data.pretty;
    */
}