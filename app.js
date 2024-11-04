let boxBtn = document.querySelectorAll(".boxBtn");
let resetBtn = document.querySelector(".resetBtn");

let player1 = true;

const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let a = boxBtn[pattern[0]].innerText;
    let b = boxBtn[pattern[1]].innerText;
    let c = boxBtn[pattern[2]].innerText;

    if (a != "" && b != "" && c != "") {
      if (a === b && b === c) {
        showWinner();
      }
    }
  }
};

boxBtn.forEach((box) => {
  box.addEventListener("click", () => {
    if (player1) {
      box.style.color = "red";
      box.style.boxShadow = "0 0 1.5rem red";
      box.textContent = "X";
      player1 = false;
    } else {
      box.style.color = "blue";
      box.style.boxShadow = "0 0 1.5rem blue";
      box.textContent = "O";
      player1 = true;
    }

    box.disabled = true;
    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  reset();
});

function showWinner() {
  document.body.classList.add("active");
  let popup = document.querySelector(".popup");
  popup.style.zIndex = 103;
  let winHeading = document.querySelector(".winHeading");
  if (player1) {
    winHeading.style.color = "blue";
    winHeading.innerText = 'Player "O" wins!';
  } else {
    winHeading.style.color = "red";
    winHeading.innerText = 'Player "X" wins!';
  }

  let tryAgain = document.querySelector(".try-again");
  tryAgain.addEventListener("click", () => {
    popup.style.zIndex = -1;
    document.body.classList.remove("active");
    reset();
  });
}

function reset() {
  boxBtn.forEach((box) => {
    box.style.color = "";
    box.style.boxShadow = "";
    box.textContent = "";
    box.disabled = false;
    player1 = true;
  });
  return true;
}
