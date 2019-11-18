  
const calculator = require('./calculate');

describe("Add function", () => {

    test("1 + 1 = 2", () => {
        const a = 1;
        const b = 1;

        const result = calculator.add(a, b);
        expect(result).toEqual(2);
    });
});