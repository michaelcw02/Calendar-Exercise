function submitForm() {

    var stringDate = document.getElementById("startDate").value;
    var qtyDays = document.getElementById("qtyDays").value;
    var ctryCode = document.getElementById("ctryCode").value;

    console.log(stringDate, qtyDays, ctryCode); //TESTING PURPOSES..

    startDate = new Calendar(stringDate);

    //MORE TESTING
    console.log(startDate.year(), startDate.month(), startDate.date(), startDate.day());
    startDate.addDate();
    console.log(startDate.year(), startDate.month(), startDate.date(), startDate.day());



}

function printCalendar(qtyDays) {

    var mainDiv = document.getElementById("calendar");
    
    var row = newRow();
    var col = newCol2();
    var table = newTable();



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
