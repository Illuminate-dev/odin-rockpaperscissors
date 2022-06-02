
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

    if (playerSelectionLower === computerSelectionLower) {
        return `Tie Game! ${playerSelectionCapitalized} ties with ${computerSelectionCapitalized}.`;
    }
    if (
        (playerSelectionLower === 'rock' && computerSelectionLower === 'scissors') ||
        (playerSelectionLower === 'scissors' && computerSelectionLower === 'paper') ||
        (playerSelectionLower === 'paper' && computerSelectionLower === 'rock')
    ) {
        return `You Win! ${playerSelectionCapitalized} beats ${computerSelectionCapitalized}.`
    }
    return `You Lose! ${computerSelectionCapitalized} beats ${playerSelectionCapitalized}.`
}
