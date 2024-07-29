
const arr = [1, 4, 9, 5];

function average(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++){
        sum += x[i];
    }
        return sum / x.length;
}

function analyseArray(x){
    return {  min: Math.min.apply(null, x),
              max: Math.max.apply(null, x),
              length: x.length,
              average: average(x)
    };
}

module.exports = analyseArray;
