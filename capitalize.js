
let x = 'ssss';
function capitalize(){
    let slicedString = x.slice(1);
    let firstLeter = x.slice(0, 1);
    let capitalLeter = firstLeter.toUpperCase();
    let  y = capitalLeter + slicedString;
     return y;
}

module.exports = capitalize;