"use strict";

const secret_number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//console.log(secret_number);
document.querySelector(".number").textContent = secret_number;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "😕😕 No number";
  } else if (guess === secret_number) {
    score++;
    document.querySelector(".message").textContent = "✌️✌️ Correct Number!!";
    document.querySelector(".score").textContent = score;
  } else {
    if (score > 1) {
      score--;
      document.querySelector(".message").textContent = "😢😢 You are wrong!!";
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "😭😭 You lost the game!!";
      document.querySelector(".score").textContent = 0;
    }
  }
});
