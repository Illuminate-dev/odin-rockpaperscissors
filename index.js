
function capitalize(string) {
    return string[0].toUpperCase().concat(string.toLowerCase().substr(1));
}


function computerPlay() {
    randInt = Math.floor(Math.random() * 3);
    switch(randInt) {
        case 0:
            return "scissors";
        case 1:
            return "rock";
        case 2:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionLower = playerSelection.toLowerCase();
    const computerSelectionLower = computerSelection.toLowerCase();

    const playerSelectionCapitalized = capitalize(playerSelection);
    const computerSelectionCapitalized = capitalize(computerSelection);

    if (
        (playerSelectionLower !== 'rock') &&
        (playerSelectionLower !== 'scissors') &&
        (playerSelectionLower !== 'paper')
    ) {
        let playerInput = prompt("Thats not Rock, Paper, or Scissors!\nChoose one.")
        return playRound(playerInput, computerPlay());
    }

    if (playerSelectionLower === computerSelectionLower) {
        return [`Tie Game! ${playerSelectionCapitalized} ties with ${computerSelectionCapitalized}.`, 'tie'];
    }
    if (
        (playerSelectionLower === 'rock' && computerSelectionLower === 'scissors') ||
        (playerSelectionLower === 'scissors' && computerSelectionLower === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelectionLower === 'rock')
    ) {
        return [`You Win! ${playerSelectionCapitalized} beats ${computerSelectionCapitalized}.`, 'player']
    }
    return [`You Lose! ${computerSelectionCapitalized} beats ${playerSelectionCapitalized}.`, 'computer']
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let roundNumber = 1;

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener('click', e => {
            const round = playRound(button.id, computerPlay());
            const winMessage = document.querySelector('#winner');
            const score = document.querySelector("#score");
            winMessage.textContent = round[0];
            if (round[1] === 'player') {
                playerScore++;
            } else if (round[1] === 'computer') {
                computerScore++;
            } else {
                roundNumber--;
            }

            if (roundNumber === 5 || playerScore === 3 || computerScore === 3) {
                score.textContent = "Game over. " + (playerScore > computerScore ? "You Won!" : "You Lost.");
                playerScore = 0;
                computerScore = 0;
                roundNumber = 0;
                return;
            }

            score.textContent = `It's ${playerScore}-${computerScore}!`
                .concat(playerScore > computerScore ? " You're up!" : (
                playerScore !== computerScore ? 
                " The computer's winning!" : " Tie game!"
            ));
            roundNumber++;
            
        });
    });

}

game();