function getUserChoice(userInput) {
    //Gets user Inputs
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
        return userInput;
    } else {
        return "Wrong Input";
    }
};

function getComputerChoice() {
    //gets the comp. input
    let randomNumGen = Math.floor(Math.random() * 3);

    if (randomNumGen === 0) {
        return "rock";
    } else if (randomNumGen === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function determineWinner(userChoice, computerChoice) {
    //Magic keyword to always win the game.
    if (userChoice === "bomb") {
        return "User has won!";
    }

    if (userChoice === computerChoice) {    //!Tie game
        return "Tie game. Better luck next time.";
    }
        if (userChoice === "rock") {
            if (computerChoice === "paper"){
                return "Computer won";
            }

            if (computerChoice === "scissors"){
                return "User won";
            }
        }

        if (userChoice === "paper"){
            if (computerChoice === "rock") {
                return "user Wins.";
            }

            if (computerChoice === "scissors") {
                return "Computer Wins.";
            }
        }

        if (userChoice === "scissors") {
            if (computerChoice === "rock") {
                return "Computer Wins.";
            }

            if (computerChoice === "paper") {
                return "User Wins.";
            }
        }
    };

function playGame(userInput) {
    let userChoice = getUserChoice(userInput);
    let computerChoice = getComputerChoice();

    
    console.log("User choice...", userChoice);
    console.log("Computer choice...", computerChoice);
    
    console.log(determineWinner(userChoice, computerChoice));
}

let userInput = prompt("Rock 🪨, Paper 📃, Scissors ✂️, shoooot 🔫")


playGame(userInput);