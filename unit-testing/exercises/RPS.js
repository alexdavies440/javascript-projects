function whoWon(player1,player2){

   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }
   let plays = ['rock', 'paper', 'scissors'];
   if (plays.includes(player1) === false || plays.includes(player2) === false) {
    return 'Bruh...';
   }
   return 'Player 1 wins!'
 }

 console.log(whoWon('pap3r', 'r0ck'));

 module.exports = whoWon;