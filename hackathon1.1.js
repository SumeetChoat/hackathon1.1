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
    let randNum = math.random()*3;
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
