
function Calendar(stringDate) {
    var arrayDate = stringDate.split("-");
    var actualDate = new Date(arrayDate[0], arrayDate[1]-1, arrayDate[2], 0, 0, 0, 0);

    this.year = function() { return actualDate.getFullYear(); } //RETURNS THE YEAR NUMBER
    this.month = function() { return actualDate.getMonth(); }   //RETURNS THE MONTH NUMBER, IT STARTS WITH 0..
    this.date = function() { return actualDate.getDate(); }     //RETURNS THE DATE NUMBER, 1 - 31;
    this.day = function() { return actualDate.getDay(); }       //RETURNS THE DAY, 0 = SUNDAY, 1 = MONDAY, 2 = TUESDAY...

    this.addDate = function() { actualDate.setDate( actualDate.getDate() + 1 ); }


    this.printHeader = function(table) {
        var thead = document.createElement("thead");
        var tr = document.createElement("tr");
        for(i = 0; i < 7; i++) {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode(daysNames[i]));
            tr.appendChild(th);
        }
        thead.appendChild(tr);
        tr = document.createElement("tr");
        var th = document.createElement("th");
        th.setAttribute("colspan", "7");
        th.appendChild(document.createTextNode(monthNames[this.month()] + " " + this.year()));
        tr.setAttribute("class", "bg-success");
        tr.appendChild(th);
        thead.appendChild(tr);
        table.appendChild(thead);
    }


    this.printDays = function(table, qtyDays) {
        var tbody = document.createElement("tbody");
        this.getHoli();
        var actualMonth = this.month();
        while(actualMonth == this.month() && qtyDays > 0) {
            
            var dayTrack = 0; //0 = sunday, 1 = monday, 2 = tuesday...
            var tr = document.createElement("tr");
            while(dayTrack < 7) {
                var td = document.createElement("td");
                var color = "none";
                if(dayTrack != this.day() || qtyDays == 0 || actualMonth != this.month()) {
                    td.appendChild(document.createTextNode(" "));
                    color = "gray-background";
                }
                else {
                    td.appendChild(document.createTextNode(this.date()));
                    if(this.day() == 0 || this.day() == 6)
                        color = "yellow-background";
                    else
                        color = "green-background";
                    this.addDate();
                    qtyDays--;
                }
                td.setAttribute("class", color);
                tr.appendChild(td);
                dayTrack++;
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        return qtyDays;
    }

    this.formatDate = function() {
        return (this.year() + '-' + (this.month() + 1) + '-' + this.date());
    }
    this.getHoli = function() {
        let country = document.getElementById('ctryCode').value;
        let date = this.formatDate()
        let holi = new Holiday(country, date);
        holi.getHolidays();
    }
}

var monthNames = ["January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"];
var daysNames = ["S", "M", "T", "W", "T", "F", "S"];