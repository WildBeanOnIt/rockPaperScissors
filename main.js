function getUserChoice(userInput) {
    //Gets user Inputs
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log(`User Input: ${userInput}`);
    } else {
        console.log(`Invalid input`);
    }
    
    // console.log(userInput)
};
getUserChoice('rock');

function getComputerChoice() {
    //gets the comp. input
    let randomNumGen = Math.floor(Math.random() * 3);

    if (randomNumGen === 0) {
        console.log(`rock`)
    } else if (randomNumGen === 1) {
        console.log(`paper`)
    } else {
        console.log(`scissors`)
    }
    return randomNumGen
}

console.log("This is the fnc getting called" + " " + getComputerChoice());

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {    //!Tie game
        console.log(`Tie game. Better luck next time.`)
    } else if(userChoice === "rock"){       //!Rock
        if (computerChoice === "paper") {
            console.log(`Computer has WON!   -line 36`)
        }
    } else if(userChoice === "paper") {     //!Paper
        if (computerChoice === "rock" || computerChoice === "scissors") {
            console.log(`Computer has LOST!  -line 42`);
        } else {
            console.log(`User has WON!   -line 44`);
        }
    } else if (userChoice === "scissors") {     //!Scissors
        if (computerChoice === "rock" || computerChoice === "paper") {
            console.log(`Comp. Wins   -line 48`);
        } else {
            console.log(`Users Wins   -line 50`);
        }
    }
}

determineWinner("paper", "scissors");