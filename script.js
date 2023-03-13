// get random number 1-3
// assign value to each number
const max = 3

function getComputerChoice() {
    let selection = Math.floor(Math.random()* max +1);
    if (selection === 1){
        compchoice = "Paper"
    } else if (selection === 2) {
        compchoice = "Rock"
    } else {
        compchoice = "Scissors"
    }
    return compchoice;
}

//player selection input
function getPlayerChoice() {
    let input = prompt("Player Selection");
    let choice = input.toLowerCase();
    const firstlet = choice.charAt(0);
    const firstLetUp = firstlet.toUpperCase();
    const word = choice.substr(1);
    const finalChoice = firstLetUp + word;
    if (finalChoice === "Rock" || finalChoice === "Paper" || finalChoice === "Scissors") {
        return finalChoice;
    } else {
        let invalidChoiceRun = getPlayerChoiceError();
        return invalidChoiceRun;
    }
}

function getPlayerChoiceError() {
    let input = prompt("Please select either Rock, Paper or Scissors");
    let choice = input.toLowerCase();
    const firstlet = choice.charAt(0);
    const firstLetUp = firstlet.toUpperCase();
    const word = choice.substr(1);
    const finalChoice = firstLetUp + word;
    if (finalChoice === "Rock" || finalChoice === "Paper" || finalChoice === "Scissors") {
        return finalChoice;
    } else {
        getPlayerChoiceError()
    }
}

//play game - player,computer
function playRound() {
    const computer = getComputerChoice();
    const player = getPlayerChoice();
    console.log("Player: " + player + ", Computer: " + computer)
    switch (player) {
        case "Rock":
        switch (computer) {
            case "Rock":
                console.log("The round is a tie!");
                break;
            case "Paper":
                console.log("Computer wins this round.");
                computerScore++;
                break;
            case "Scissors":
                console.log("You win this round!");
                playerScore++;
                break;
        }
        break;
    }
    console.log("Player " + playerScore + ", Computer " + computerScore)
}

let playerScore = 0
let computerScore = 0

playRound()