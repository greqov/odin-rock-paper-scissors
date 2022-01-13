console.log('Horray!')

let playerWins = 0
let computerWins = 0
let roundCounter = 0
const roundsToWin = 3

document.addEventListener('click', (el) => {
    if (el.target.id === "playRound") {
        startRound()
    }

    if (el.target.id === "playGame") {
        playGame()
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

function startRound() {
    const playerSelection = playerPlay()

    if (playerSelection) {
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
        showStats()
    }

    if (playerWins === roundsToWin || computerWins === roundsToWin) {
        showWinner()
        console.log('Please start a new game!')
        document.getElementById('playRound').setAttribute('disabled', true)
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
    playerWins = 0
    computerWins = 0
    roundCounter = 0

    document.getElementById('playRound').removeAttribute('disabled')
    console.clear()
    console.log('Starting new game')
    console.log('Press a "Play round" button to start playing')
}

function showStats() {
    console.log(`[ Player ${playerWins} : ${computerWins} Computer ] ${roundCounter} rounds played`);
}

function showWinner() {
    if (playerWins >= roundsToWin) {
        console.log(`>>> Horray! Player wins in ${roundCounter} rounds! <<<`)
    }

    if (computerWins >= roundsToWin) {
        console.log(`>>> Computer wins in ${roundCounter} rounds! <<<`)
    }
}
