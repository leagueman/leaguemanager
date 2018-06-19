const common = require('../common');

describe('Dates are validated properly',()=>{

    test('returns if date is valid - given a string', () => {
        expect( common.isValidDate("2018-09-23") ).toEqual(true);
    });
    test('returns if date is valid - given a string', () => {
        expect( common.isValidDate("2018-09-23x") ).toEqual(false);
    });
    test('returns if date is valid - given a string', () => {
        expect( common.isValidDate("15-11-2018") ).toEqual(false);
    });

})


describe('Shuffles array properly',()=>{

    test('returns an array containing the same values', () => {
        expect( common.shuffle(["a","b","c"]) ).toEqual(  
            expect.arrayContaining(["a"]),
            expect.arrayContaining(["b"]),
            expect.arrayContaining(["c"])
        );
    });

})