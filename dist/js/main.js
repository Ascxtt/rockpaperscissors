const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");
const scoreBoard = {
  player: 0,
  computer: 0
};

//Play Game
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//get computer choice
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);

  if (rand == 0) {
    return "rock";
  } else if (rand == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

//get game winner
function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

//show winner
function showWinner(winner, computerChoice) {
  if (winner === "player") {
    //inc player score
    scoreBoard.player++;
    //show modal
    result.innerHTML = `
  <h1 class="text-win">You Win</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>Computer Chose <Strong>${computerChoice.toUpperCase()}</Strong></p>
  `;
  } else if (winner === "computer") {
    scoreBoard.computer++;
    result.innerHTML = `
  <h1 class="text-lose">You Lose</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>Computer Chose <Strong>${computerChoice.toUpperCase()}</Strong></p>
  `;
  } else {
    result.innerHTML = `
  <h1>Draw</h1>
  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
  <p>Computer Chose <Strong>${computerChoice.toUpperCase()}</Strong></p>
  `;
  }

  // show score
  score.innerHTML = `
  <p>Player: ${scoreBoard.player}</p>
  <p>Computer: ${scoreBoard.computer}</p>
  `;

  modal.style.display = "block";
}
//
function restartGame() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  score.innerHTML = `
  <p>Player: 0</p>
  <p>Computer: 0</p>
  `;
  restart.style.display = "none";
}
//clear modal
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

//event listeners

choices.forEach(choice => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
