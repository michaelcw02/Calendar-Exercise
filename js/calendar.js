
function Calendar(stringDate) {
    var arrayDate = stringDate.split("-");
    var actualDate = new Date(arrayDate[0], arrayDate[1]-1, arrayDate[2], 0, 0, 0, 0);

    this.year = function() { return actualDate.getFullYear(); } //RETURNS THE YEAR NUMBER
    this.month = function() { return actualDate.getMonth(); }   //RETURNS THE MONTH NUMBER, IT STARTS WITH 1..
    this.date = function() { return actualDate.getDate(); }     //RETURNS THE DATE NUMBER, 1 - 31;
    this.day = function() { return actualDate.getDay(); }       //RETURNS THE DAY, 0 = SUNDAY, 1 = MONDAY, 2 = TUESDAY...

    this.addDate = function() { actualDate.setDate( actualDate.getDate() + 1 ); }


    this.printHeader = function(table) {
        var thead = document.createElement("thead");
        var trow = document.createElement("tr");
        for(i = 0; i < 7; i++) {
            var cell = document.createElement("th");
            cell.appendChild(document.createTextNode(daysNames[i]));
            trow.appendChild(cell);
        }
        thead.appendChild(trow);
        trow = document.createElement("tr");
        var cell = document.createElement("th");
        cell.setAttribute("colspan", "7");
        cell.appendChild(document.createTextNode(monthNames[this.month()] + " " + this.year()));
        trow.setAttribute("class", "bg-success");
        trow.appendChild(cell);
        thead.appendChild(trow);
        table.appendChild(thead);
    }


    this.printDays = function(table, qtyDays) {
        var tbody = document.createElement("tbody");

        var actualMonth = this.month();
        while(actualMonth == this.month() && qtyDays > 0) {
            
            var dayTrack = 0; //0 = sunday, 1 = monday, 2 = tuesday...
            var trow = document.createElement("tr");
            while(dayTrack < 7) {
                var cell = document.createElement("td");
                var color = "none";
                if(dayTrack != this.day() || qtyDays == 0 || actualMonth != this.month()) {
                    cell.appendChild(document.createTextNode(" "));
                    color = "gray-background";
                }
                else {
                    cell.appendChild(document.createTextNode(this.date()));
                    if(this.day() == 0 || this.day() == 6)
                        color = "yellow-background";
                    else
                        color = "green-background";
                    this.addDate();
                    qtyDays--;
                }
                cell.setAttribute("class", color);
                trow.appendChild(cell);
                dayTrack++;
            }
            tbody.appendChild(trow);
        }
        table.appendChild(tbody);
        return qtyDays;
    }


}

var monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
var daysNames = ["S", "M", "T", "W", "T", "F", "S"];