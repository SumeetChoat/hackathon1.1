//This game is called Rock, Paper, scissors.

//The possible outcomes are:
// - Rock beats scissors
// - Scissors beats paper
// - Paper beats rock
// - Tie game = game ends in draw


// 1) get player choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' | userInput === 'paper' | userInput === 'scissors') {
        return userInput 
    } else {
        console.log('Error, please enter valid response: rock, paper or scossors');
    }
}

//2) get computer choice(funny because they can't think it's just randomised)

const getComputerChoice = () => {
    let randNum = Math.floor(Math.random()*3);
    return randNum === 0 ?
    'rock' : (randNum === 1 ?
    'paper' : 'scissors');
        switch (randNum) {
            case 0:
                return 'rock';
                break;
                case 1:
                    return 'paper';
                    break;
                    case 2:
                        return 'scissors';
                        break;
                        default:
                            console.log('Try again!');
                            break;
        }
};

console.log(getComputerChoice());

//the rules
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'tie game'
    } else 
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won';
        } else {
            return 'you win'
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer wins';
        } else {
            return 'you won!'
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'the computer won!';
        } else {
            return 'you won'
        }
    }
}

console.log(determineWinner('rock', 'paper'));
console.log(determineWinner('paper', 'scissors'));
console.log(determineWinner('paper', 'paper'));
console.log(determineWinner('paper', 'rock'));

const playGame = () => {
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
        console.log('you threw: ' + userChoice);
        console.log('the computer threw: ' + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
};

playGame(); //input userChoice here
