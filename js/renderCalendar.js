function submitForm() {

    var stringDate = document.getElementById("startDate").value;
    var qtyDays = document.getElementById("qtyDays").value;
    var ctryCode = document.getElementById("ctryCode").value;

    if(Date.parse(stringDate)) {
        startDate = new Calendar(stringDate);
        printCalendar(startDate, qtyDays);
    } 
    else {
        alert("You must enter a date");
    }
}

function printCalendar(startDate, qtyDays) {

    var mainDiv = document.getElementById("calendar");
    clearDiv(mainDiv);
    getHolidays();
    while(qtyDays > 0) {
        var row = newRow();
        var i = 0;
        while(i < 6 && qtyDays > 0) {
            var col = newCol2();
            var table = newTable();
            startDate.printHeader(table);
            qtyDays = startDate.printDays(table, qtyDays);
            col.appendChild(table);
            row.appendChild(col);
            i++;
        }
        mainDiv.appendChild(row);
        mainDiv.appendChild(document.createElement("br"));
    }

}

function newRow() {
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    return row;
}
function newCol2() {
    var col = document.createElement("div");
    col.setAttribute("class", "col-md-2");
    return col;
}
function newTable() {
    var table = document.createElement("table");
    table.setAttribute("class", "table-bordered");
    return table;
}
function clearDiv(div) {
    div.innerHTML = " ";
}

function getHolidays(date = new Date()) {
    let country = document.getElementById('ctryCode').value;
    let year = date.getFullYear();
    let xhr = new XMLHttpRequest();
//  xhr.open('GET', 'http://ipinfo.io/json', true);
    xhr.open('GET', 'http://cors.io/?http://127.0.0.1:12233', true);
    xhr.send();
    xhr.addEventListener('readystatechange', (event) => {
        if(xhr.readyState == 4)
            console.log(xhr.responseText);
    }, true);
}