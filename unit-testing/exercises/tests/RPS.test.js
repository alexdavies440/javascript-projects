const whoWon = require('../RPS');

describe("whoWon", function() {
    test("whoWon returns a tie when both arguments are equal to each other", function() {
        let output = whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });
    test("whoWon returns winner for 'rock against scissors", function() {
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual('Player 2 wins!')
    });
    test("whoWon returns winner for 'scissors' against 'paper'", function() {
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });
    test("whoWon returns winner for 'paper' against 'rock'", function() {
        let output = whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!');
    })
    test("whoWon returns error conveying disappointment if players try to go off-script", function() {
        let output = whoWon('corndog', '42');
        expect(output).toEqual('Bruh...');
    })
    
});