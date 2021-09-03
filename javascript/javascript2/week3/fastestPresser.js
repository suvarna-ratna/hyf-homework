const body = document.querySelector("body");
const startgame = document.getElementById("startGame");
const newgame = document.getElementById("newGame");
const scount = document.getElementById("s-count");
const lcount = document.getElementById("l-count");
const winner = document.getElementById("winner");
const gameStatus = document.getElementById("gameOver");
const userValue = document.getElementById("quantity");
let sPressed;
let lPressed;
const sCanvas = document.getElementById("s-canvas");
const lCanvas = document.getElementById("l-canvas");

const winnerFun = () => {
  if (sPressed === lPressed) {
    winner.innerHTML = "Game is draw";
    const confettiSettingsS = { target: sCanvas };
    const confettis = new ConfettiGenerator(confettiSettingsS);
    confettis.render();
    const confettiSettingsL = { target: lCanvas };
    const confettil = new ConfettiGenerator(confettiSettingsL);
    confettil.render();
  } else if (sPressed > lPressed) {
    winner.innerHTML = "S is the winner !!!🎉";
    const confettiSettingsS = { target: sCanvas };
    const confettis = new ConfettiGenerator(confettiSettingsS);
    confettis.render();
  } else {
    winner.innerHTML = "L is the winner !!!🎉";
    const confettiSettingsL = { target: lCanvas };
    const confettil = new ConfettiGenerator(confettiSettingsL);
    confettil.render();
  }
};

startgame.addEventListener("click", startGame);
function startGame() {
  newgame.style.backgroundColor = "green";
  startgame.style.backgroundColor = "red";
  startgame.disabled = true;
  gameStatus.innerHTML = "";
  sPressed = 0;
  lPressed = 0;
  const timeValue = userValue.value;
  setTimeout(() => {
    startgame.style.backgroundColor = "green";
    document.removeEventListener("keydown", countKeyPressed);
    gameStatus.innerHTML = "Game Over !!!";
    winnerFun();
  }, timeValue * 1000);
  document.addEventListener("keydown", countKeyPressed);
  function countKeyPressed(event) {
    if (event.key === "s") {
      sPressed++;
      scount.innerHTML = sPressed;
    } else if (event.key === "l") {
      lPressed++;
      lcount.innerHTML = lPressed;
    }
  }
}

newgame.addEventListener("click", () => {
  window.location.reload();
});
