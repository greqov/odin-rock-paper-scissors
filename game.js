console.log('Horray!')

/*
TODO:
    [x] get user input (R, P, S) via prompt
    [x] *handle wrong user input
    [x] add button to ask a prompt
    [x] get computer selection
    [] define round winner
    [] play N rounds until somebody wins 5 times
*/

document.addEventListener('click', (el) => {
    if (el.target.id === "playButton") {
        let playerSelection = playerPlay()
    }
})

function playerPlay() {
    const availableChoices = ['R', 'P', 'S']
    let input = prompt('Make your selection: R - rock, P - paper, S - scissors').toUpperCase()
    if (!availableChoices.includes(input)) {
        console.log('Wrong input, please try again')
        console.log('Available options: R, r, P, p, S, s');
        return
    }

    console.log(`Player selection: ${input}`);
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
    // magic here
    // return win/lose message
}

function playGame() {
    // play rounds until 5 wins
}

const computerSelection = computerPlay()
console.log(computerSelection);
