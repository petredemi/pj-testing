
let string = 'abc,de';
let alphabet = 'abcdefhhijklmnopqrstuvwxyz';

function caesarCipher(){
    let newString = '';
    for ( let i = 0; i < string.length; i++){
        if(alphabet.includes(string[i])){
        let n = alphabet.indexOf(string[i]) + 2
       newString = newString + alphabet[n];
        }else {
            newString = newString + string[i];
        }
    }
        return newString;
}
module.exports = caesarCipher;