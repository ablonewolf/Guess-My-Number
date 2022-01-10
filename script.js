"use strict";

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//console.log(secret_number);

// function for showing message in message class
const showMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// function for showing score in score class
const showScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  // document.querySelector(".message").textContent = "Start guessing...";
  showMessage("Start guessing...");
  document.querySelector(".guess").value = "";
  // document.querySelector(".score").textContent = score;
  showScore(score);
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "😕😕 No number";
    showMessage("😕😕 No number");

    // When the guess matches with the random number
  } else if (guess === secret_number) {
    score++;
    document.querySelector(".guess").value = " ";
    // document.querySelector(".message").textContent = "✌️✌️ Correct Number!!";
    showMessage("✌️✌️ Correct Number!!");
    // document.querySelector(".score").textContent = score;
    showScore(score);
    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When the input does not match with the number
  } else {
    if (score > 1) {
      score--;
      // document.querySelector(".message").textContent = "😢😢 Too Low!!";

      showMessage(guess < secret_number ? "😢😢 Too Low!!" : "😢😢 Too High!!");

      // document.querySelector(".score").textContent = score;
      showScore(score);
    } else {
      // document.querySelector(".message").textContent = "😭😭 You lost the game!!";
      showMessage("😭😭 You lost the game!!");
      // document.querySelector(".score").textContent = 0;
      showScore(0);
    }
  }
});
