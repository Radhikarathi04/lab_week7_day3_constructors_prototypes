// Creating a car class with properties manufacturer, price, engine type

const Car = function(manufacturer, price, engine) {
    this.manufacturer = manufacturer;
    this.price = price;
    this.engine = engine;
}

// Exporting the car class so that can be used in another class or for testing
module.exports = Car;