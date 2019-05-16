//Create an object named idealCar
let idealCar = {
    /*
    Within the idealCar object, add the following:
- a name property with a value of mustang
- a color property with a value of red
- a weightInPounds property with a value of 3600
- a method named myCar that takes each of the values, 
links them together and console.logs the string My ideal car is a mustang with a color of red, but I do not want it to be over 3600 pounds.
- You will need to use the this keyword */
    name: 'mustang',
    color: 'red',
    weightInPounds: 3600,
    myCar: function () {
        console.log("My ideal car is a " + this.name + "with a color of " + this.color + ", but I do not want it to be over " + this.weightInPounds + "pounds.");

    }
};
idealCar.myCar();