// Importing the Car class
const Car = require('./Car');

// Write tests to access the properties in the Car object

let car;

beforeEach(() => {
    car = new Car("Audi", 30000, "hybrid");
});

// using describe to group all the tests together
describe("accessing car properties", () => {

    test("can access the manufacturer property", () => {
        const expected = "Audi";
        const actual = car.manufacturer;
        expect(actual).toBe(expected)
    });

    test("can access the price property", () => {
        const expected = 30000;
        const actual = car.price;
        expect(actual).toBe(expected)
    });

    test("can access the engine property", () => {
        const expected = "hybrid";
        const actual = car.engine;
        expect(actual).toBe(expected)
    });
});