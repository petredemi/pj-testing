const caesarCipher = require('./caesarCipher');


test ( 'test caesar cipher move first letter by 2', () => {
    expect(caesarCipher(2)).toBe('cde,fh')
});