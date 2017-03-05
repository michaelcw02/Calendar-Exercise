
var https = require("https");

var url = "https://holidayapi.com/v1/holidays?key=ea131354-c913-4ed4-8bb5-4673250727c2";

var holiday = function(parameters) {

    if ('object' === typeof parameters) {
        for (var parameter in parameters) {
            url += '&' + parameter + '=' + parameters[parameter];
        }
    }
    https.get(url, function (res) {
        res.on('data', function (data) {
        try {
            data = JSON.parse(data);
        } catch (e) {
            data = {};
        }

        var error = null;

        if (res.statusCode !== 200) {
            if ('undefined' === typeof data['error']) {
            error = 'Unknown error.';
            } else {
            error = data.error;
            }
        }

        return callback(error, data);
        });
    }).on('error', function (e) {
        callback(e.message);
        });
}

var parameters = function(country, year, month) {
    var parameters = {
        "country" : country,
        "year" : year,
        "month" : month,
    };
    return holiday(parameters);
}