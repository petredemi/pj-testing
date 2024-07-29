const analizeArray = require('./analyzeArray');


let x = [2, 7, 4, 11]

test ('analize an array and return an obhect', () => {
    expect(analizeArray(x)).toEqual(
    {   min: 2, 
        max: 11,
        length: 4,
        average: 6 
    });
});
