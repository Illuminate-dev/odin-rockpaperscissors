
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

    if (playerSelectionLower === computerSelectionLower) {
        return `Tie Game! ${playerSelectionLower} ties with ${computerSelectionLower}.`;
    }
    if (
        (playerSelectionLower === 'rock' && computerSelectionLower === 'scissors') ||
        (playerSelectionLower === 'scissors' && computerSelectionLower === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelectionLower === 'rock')
    ) {
        return `You Win! ${playerSelectionLower} beats ${computerSelectionLower}.`
    }
    return `You Lose! ${computerSelectionLower} beats ${playerSelectionLower}.`
}
