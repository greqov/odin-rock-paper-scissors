console.log('Horray!')

/*
TODO:
    [x] get user input (R, P, S) via prompt
    [x] *handle wrong user input
    [x] add button to ask a prompt
    [x] get computer selection
    [x] define round winner
    [] play N rounds until somebody wins 5 times
*/

let playerWins = 0
let computerWins = 0
let roundCounter = 0

document.addEventListener('click', (el) => {
    if (el.target.id === "playButton") {
        const playerSelection = playerPlay()
        if (playerSelection) {
            const computerSelection = computerPlay()
            playRound(playerSelection, computerSelection)
            showStats()
        }
    }
})

function playerPlay() {
    const availableChoices = ['R', 'P', 'S']
    let input
    try {
        input = prompt('Make your selection: R - rock, P - paper, S - scissors').toUpperCase()
    } catch (err) {
        console.log(`Wrong input! Please try again. Details: ${err}`);
        return
    }

    if (!availableChoices.includes(input)) {
        console.log('Wrong input, please try again')
        console.log('Available options: R, r, P, p, S, s');
        return
    }

    return input
}

function computerPlay() {
    const val = Math.floor(Math.random() * 100) % 3
    if (val === 0) {
        return 'R'
    } else if (val === 1) {
        return 'S'
    } else {
        return 'P'
    }
}

function playRound(playerSelection, computerSelection) {
    roundCounter++

    console.log(`Player selects ${playerSelection}`);
    console.log(`Computer selects ${computerSelection}`);

    if (playerSelection === computerSelection) {
        console.log('Whoa! It\'s a tie!');
        return
    }

    if (playerSelection === 'P') {
        if (computerSelection === 'R') {
            playerWins++
            console.log('Player wins');
            return
        } else {
            computerWins++
            console.log('Computer wins');
            return
        }
    }

    if (playerSelection === 'R') {
        if (computerSelection === 'S') {
            playerWins++
            console.log('Player wins');
            return
        } else {
            computerWins++
            console.log('Computer wins');
            return
        }
    }

    if (playerSelection === 'S') {
        if (computerSelection === 'P') {
            playerWins++
            console.log('Player wins');
            return
        } else {
            computerWins++
            console.log('Computer wins');
            return
        }
    }

}

function playGame() {
    // play rounds until 5 wins
}


function showStats() {
    console.log(`[ Player ${playerWins} : ${computerWins} Computer ] ${roundCounter} rounds played`);
}
