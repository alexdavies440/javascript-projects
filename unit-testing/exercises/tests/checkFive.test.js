const checkFive = require('../checkFive');

describe("checkFive", function(){
    test("Check to see if number entered is less than five", function() {
        let output = checkFive(2);
        expect(output).toEqual("2 is less than 5.");
    })
});