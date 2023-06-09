// this is a dice roll game where the player with the highest roll will win the game. There are two players, user (human) vs computer.

//declare function rollDice
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
    //Roll two dice
    const player1 = rollDice();
    const compInput = rollDice();

    //Determine winner
    let winner;
    if (player1 > compinput) {
        winner = "player 1";
    } else if (compInput > player1) {
        winner = "compInput"
    } else {
        winner = "it's a tie"
    }
}

//Display the result
console.log(`Player 1 rolled: ${player1}`);
console.log(`compInput rolled: ${compInput}`);
console.log(`The winner is: ${winner}`);
