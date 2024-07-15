const whoWon = require('../RPS');

describe("whoWon", function() {
    test("Determines who wins in Rock, Paper, Scissors", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });
});