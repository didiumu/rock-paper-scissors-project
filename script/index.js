function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

const results = document.querySelector("#results");

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();

    if (humanChoice === computerChoice) {
        results.textContent = `It's a tie! Both chose ${humanChoice}.`;
    }

    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    }

    else {
        computerScore++;
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    results.textContent += ` Your score: ${humanScore}. Computer score: ${computerScore}.`;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            results.textContent += " GAME OVER! Congratulations! You won!";
        }

        else {
            results.textContent += " GAME OVER! Computer won! Better luck next time.";
        }

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    }
}

rockBtn.addEventListener("click", () => {
    playRound("rock");
});

paperBtn.addEventListener("click", () => {
    playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors");
});