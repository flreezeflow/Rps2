const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('result');
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
let playerScore = 0;
let computerScore = 0;
let paperCount = 0;
document.getElementById("surprise").style.opacity = 0

function playGame(playerChoice){

    const compChoice = choices[Math.floor(Math.random() * 3)]
    let result = ""

    if(playerChoice === compChoice){
        result = "ITS A TIE!"
    }else{
        switch(playerChoice){
            case "rock":
                result = (compChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (compChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (compChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "YES!":
                result = "🥵";
                break;

        }
    }

    playerDisplay.textContent = `Player : ${playerChoice}`;
    computerDisplay.textContent = `Computer : ${compChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText")

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText")
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText")
            computerScore++
            computerScoreDisplay.textContent = computerScore;
            break;
        case "🥵":
            resultDisplay.classList.add("redText")
            playerScore++
            playerScoreDisplay.textContent = playerScore;
            break;
        
    }

    if(playerChoice === "paper"){
        paperCount++
        if(paperCount === 3){
            document.getElementById("surprise").style.opacity = 1
        }
    }

    console.log(paperCount)
}
