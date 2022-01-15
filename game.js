/**
 * TODO
 * [] add IIFE
 *
 */

const roundsToWin = 3;

let state = {
  playerWins: 0,
  computerWins: 0,
  playerPick: "...",
  computerPick: "...",
  roundCounter: 0,
  roundResult: "...",
  gameResult: "...",
};

function clearState() {
  state.playerWins = 0;
  state.computerWins = 0;
  state.playerPick = "...";
  state.computerPick = "...";
  state.roundCounter = 0;
  state.roundResult = "...";
  state.gameResult = "...";
}

document.addEventListener("click", (el) => {
  if (el.target.id === "playGame") {
    playGame();
  }
});

const playBtns = Array.from(document.querySelectorAll(".controls button"));

playBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const playerSelection = e.target.value;
    const computerSelection = computerPlay();
    state.playerPick = playerSelection;
    state.computerPick = computerSelection;
    playRound(playerSelection, computerSelection);
    updateUI();

    if (
      state.playerWins === roundsToWin ||
      state.computerWins === roundsToWin
    ) {
      showWinner();
    }
  });
});

function computerPlay() {
  const val = Math.floor(Math.random() * 100) % 3;
  if (val === 0) {
    return "R";
  } else if (val === 1) {
    return "S";
  } else {
    return "P";
  }
}

function playRound(playerSelection, computerSelection) {
  state.roundCounter++;

  if (playerSelection === computerSelection) {
    state.roundResult = "Whoa! It's a tie!";
    return;
  }

  if (playerSelection === "P") {
    if (computerSelection === "R") {
      state.playerWins++;
      state.roundResult = "Player wins";
      return;
    } else {
      state.computerWins++;
      state.roundResult = "Computer wins";
      return;
    }
  }

  if (playerSelection === "R") {
    if (computerSelection === "S") {
      state.playerWins++;
      state.roundResult = "Player wins";
      return;
    } else {
      state.computerWins++;
      state.roundResult = "Computer wins";
      return;
    }
  }

  if (playerSelection === "S") {
    if (computerSelection === "P") {
      state.playerWins++;
      state.roundResult = "Player wins";
      return;
    } else {
      state.computerWins++;
      state.roundResult = "Computer wins";
      return;
    }
  }
}

function playGame() {
  clearState();
  setBtnsState(true);
  updateUI();
}

function showWinner() {
  const winner = state.playerWins >= roundsToWin ? "Player" : "Computer";
  ui.gameResult.innerText = `>>> Horray! ${winner} wins in ${state.roundCounter} rounds! <<<`;

  setBtnsState(false);
}

function setBtnsState(bool) {
  if (bool) {
    playBtns.forEach((button) => button.removeAttribute("disabled"));
  } else {
    playBtns.forEach((button) => button.setAttribute("disabled", true));
  }
}

function getUiElements() {
  return {
    playerWins: document.querySelector(".player-wins"),
    computerWins: document.querySelector(".computer-wins"),
    playerPick: document.querySelector(".player-pick"),
    computerPick: document.querySelector(".computer-pick"),
    roundCounter: document.querySelector(".round-counter"),
    roundResult: document.querySelector(".round-result"),
    gameResult: document.querySelector(".game-result"),
  };
}

let ui = getUiElements();

function updateUI() {
  ui.playerWins.innerText = state.playerWins;
  ui.computerWins.innerText = state.computerWins;
  ui.playerPick.innerText = state.playerPick;
  ui.computerPick.innerText = state.computerPick;
  ui.roundCounter.innerText = state.roundCounter;
  ui.roundResult.innerText = state.roundResult;
}
