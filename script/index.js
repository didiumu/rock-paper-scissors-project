function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}


function getHumanChoice() {
    const answer = prompt("Choose rock, paper, or scissors:");

    if (answer === null) {
        return null;
    }

    return answer.trim().toLowerCase();
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        }

        else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;

            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        }

        else {
            computerScore++;

            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }
    }


    for (let round = 1; round <= 5; round++) {

        console.log(`Round ${round}`);

        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            console.log("Game cancelled.");
            return;
        }

        if (!["rock", "paper", "scissors"].includes(humanSelection)) {
            console.log("Invalid choice! Please choose rock, paper, or scissors.");
            round--;
            continue;
        }

        const computerSelection = getComputerChoice();

        console.log(`You chose: ${humanSelection}`);
        console.log(`Computer chose: ${computerSelection}`);

        playRound(humanSelection, computerSelection);

        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);

        console.log("-------------------------");
    }


    console.log("GAME OVER!");

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    }

    else if (computerScore > humanScore) {
        console.log("Computer won the game! Better luck next time.");
    }

    else {
        console.log("The game is a tie!");
    }

    console.log(`Final human score: ${humanScore}`);
    console.log(`Final computer score: ${computerScore}`);
}


playGame();