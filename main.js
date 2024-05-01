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
    } else {
        if (userChoice === "rock") {
            if (computerChoice === "paper") {
                console.log(`Computer wins!`)
            } else {
                console.log(`User wins!`)
            }
        } else if (userChoice === "paper") {
            if (computerChoice === "rock") {
                console.log(`User wins!!`)
            } else {
                console.log(`Computer Wins!!`)
            }
        } else {
        if (computerChoice === "paper") {
                console.log(`User Wins!!!`)
            } else {
                console.log(`Computer Wins!!!`)
            }
        }
    }
}

determineWinner("paper", "scissors");