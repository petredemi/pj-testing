

let x = 'asdfg'

function reverseString(){
    let toArr = x.split('');
    let reversedArray = toArr.reverse();
    let y = reversedArray.join('')
    return y;
}
module.exports = reverseString;