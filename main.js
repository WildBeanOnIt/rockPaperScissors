function getUserChoice(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        console.log(`${userInput}`);
    } else {
        console.log(`Invalid input`);
    }
    
    console.log(userInput)
};

getUserChoice('nice');