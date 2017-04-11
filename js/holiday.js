
function Holiday(name, date, observed, public ) {

}

Holiday.prototype = {
    Holiday: function(name, date, observed, public) {
        this.name = name;
        this.date = date;
        this.observed = observed;
        this.public = public;
    },
    reviver: function() {

    }

}