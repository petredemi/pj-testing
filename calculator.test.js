const calculator = require('./calculator');


test ('testing calculator functions', () => {
    expect( calculator.sum(3, 3)).toBe(6);
});
test ('testing calculator functions', () => {
    expect( calculator.substract(7, 3)).toBe(4);
});
test ('testing calculator functions', () => {
    expect( calculator.divide(8, 2)).toBe(4);
});
test ('testing calculator functions', () => {
    expect( calculator.multiply(3, 3)).toBe(9);
});