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