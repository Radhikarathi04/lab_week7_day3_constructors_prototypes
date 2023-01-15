// Importing dealership class
const Dealership = require('./Dealership');
const Car = require('./Car');

// tests for dealership methods

let dealership;

beforeEach(() => {
    dealership = new Dealership("BNTA dealers", 6);

    dealership.addCar(new Car("Audi", 30000, "hybrid"));
});

describe("tests for dealership methods", () => {
    test("can count number of cars in stock", () => {
        const expected = 1;
        const actual = dealership.countNumberofCars();
        expect(actual).toBe(expected);
    });

    test("can add car to stock", () => {
        dealership.addCar(new Car("Tesla", 50000, "electric"));
        const expected = 2;
        const actual = dealership.countNumberofCars();
        expect(actual).toBe(expected);
    })

    test("can get array of car manufactures", () => {

        const expected = ["Audi"];
        const actual = dealership.carManufacturers();
        expect(actual).toStrictEqual(expected);
    });

    test("Can find all cars from given manufacturer Audi", () => {

        const expected = [new Car("Audi", 30000, "hybrid")];
        const actual = dealership.findFromGivenManufacturer("Audi");
        expect(actual).toStrictEqual(expected);
    });

    test("can find total value of all cars", () => {
        const expected = 30000;
        const actual = dealership.totalCarValue();
        expect(actual).toBe(expected);
    });
});

