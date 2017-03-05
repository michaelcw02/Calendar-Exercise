
function Calendar(stringDate) {
    var arrayDate = stringDate.split("-");
    var actualDate = new Date(arrayDate[0], arrayDate[1], arrayDate[2], 0, 0, 0, 0);

    this.year = function() { return actualDate.getFullYear(); } //RETURNS THE YEAR NUMBER
    this.month = function() { return actualDate.getMonth(); }   //RETURNS THE MONTH NUMBER, IT STARTS WITH 0..
    this.date = function() { return actualDate.getDate(); }     //RETURNS THE DATE NUMBER, 1 - 31;
    this.day = function() { return actualDate.getDay(); }       //RETURNS THE DAY, 0 = SUNDAY, 1 = MONDAY, 2 = TUESDAY...

    this.addDate = function() { actualDate.setDate( actualDate.getDate() + 1 ); }


    this.printHeader = function(table) {

        var thead = document.createElement("thead");
        var trow = document.createElement("tr");
        for(i = 0; i < 7; i++) {
            var cell = document.createElement("th");
            cell.appendChild(document.createTextNode(daysNames[i]));
            
        }

    }


}

var monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
var daysNames = ["S", "M", "T", "W", "T", "F", "S"];