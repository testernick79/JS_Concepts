let person = {
    firstName: 'Jesus',
    lastName: 'Jones',
    age: 88,
    getfullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
};

let carMiles = {
    odometer: 8000,
    traveledMiles: 70,
    getUpdateOdometers: function () {
        console.log(this.odometer + " " + this.traveledMiles);
    }
};
carMiles.getUpdateOdometers();

let user = {
    firstName: "Coder",
    lastName: "Bill",
    getFullName: function () {
        console.log(firstName + ' ' + lastName);
    }
};
user.getFullName();