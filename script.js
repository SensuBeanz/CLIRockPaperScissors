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

console.log(getComputerChoice())

//player selection input
function getPlayerChoice() {
    let input = prompt("Player Selection");
    let input = input.toLowerCase();
    return input;
}

console.log(getPlayerChoice())
//play game - player,computer