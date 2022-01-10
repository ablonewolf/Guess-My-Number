"use strict";

let secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//console.log(secret_number);

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  secret_number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("number").style.width = "15rem";
});

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😕😕 No number";
  } else if (guess === secret_number) {
    score++;
    document.querySelector(".message").textContent = "✌️✌️ Correct Number!!";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = secret_number;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    if (guess < secret_number) {
      if (score > 1) {
        score--;
        document.querySelector(".message").textContent = "😢😢 Too Low!!";
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😭😭 You lost the game!!";
        document.querySelector(".score").textContent = 0;
      }
    } else {
      if (score > 1) {
        score--;
        document.querySelector(".message").textContent = "😢😢 Too High!!";
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😭😭 You lost the game!!";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});
