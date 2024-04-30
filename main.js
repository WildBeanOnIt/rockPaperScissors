function getUserChoice(userInput) {
    //Gets user Inputs
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log(`${userInput}`);
    } else {
        console.log(`Invalid input`);
    }
    
    // console.log(userInput)
};
getUserChoice('nice');

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

