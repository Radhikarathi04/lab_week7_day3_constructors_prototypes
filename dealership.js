const Car = require('./Car');

// create dealership class with properties of name, maximum number of cars, cars currently in stock

const Dealership = function(name, maxCars) {
    this.name = name;
    this.maxCars = maxCars;
    this.carsInStock =[];
};

// Add methods to dealership - 

// Count number of cars
Dealership.prototype.countNumberofCars = function() {
    return this.carsInStock.length;
};

// Add a  car to stock
Dealership.prototype.addCar = function(car) {
    this.carsInStock.push(car);
}

// Return an array containing each cars manufacturer
// .map creates a new array from calling a function
// callback function

Dealership.prototype.carManufacturers = function() {
    return this.carsInStock.map(car => {
        return car.manufacturer;
    })
};

// find all cars from given manufacturer
Dealership.prototype.findFromGivenManufacturer = function(manufacturer) {
    return this.carsInStock.filter(car => car.manufacturer === manufacturer)
}

// find total value of all cars in stock
Dealership.prototype.totalCarValue = function() {
    return this.carsInStock.reduce((reducer, car) => reducer + car.price, 0)
};

module.exports = Dealership;