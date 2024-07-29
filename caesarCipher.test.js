const caesarCipher = require('./caesarCipher');


test ( 'test caesar cipher move first letter by 2', () => {
    expect(caesarCipher()).toBe('cde,fh')
});