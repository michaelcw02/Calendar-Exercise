
var Holiday = function (country = 'US', date = new Date(), previous = false, upcoming = false, public = false, pretty = false) {
    Holiday.prototype.country = country;
    Holiday.prototype.date = date;
    Holiday.prototype.previous = previous;
    Holiday.prototype.public = public;
    Holiday.prototype.pretty = pretty;
}

Holiday.prototype.getHolidays = function () {
    
    let xhr = new XMLHttpRequest();
    let response;
    //THIS STATEMENT IS NOT USED FOR THE EXERCISE PURPOSED.
    //let statement = '/holiday/' + this.country + '/' + this.date + '/' + this.previous + '/' + this.public + '/' + this.pretty;    
    let statement = '/holiday/' + this.country + '/' + this.date;    
    xhr.open('GET', statement, true);
    xhr.send();
    xhr.addEventListener('readystatechange', manageResponse, true);

    function manageResponse(event) {
        if (xhr.readyState == 4) {
            response = JSON.parse(xhr.responseText, null, 2);
            returnHolidays(response);
        }
    }
    function returnHolidays (response) {
        let dateFormat = /\d{4}-\d{2}-\d{2}/;
        let objectFormat = /^\d$/

        this.prototype.holidays = response.holidays;
    }
}





    
