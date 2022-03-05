startButtonEl = document.querySelector(".start-quiz");
quizAreaEl = document.querySelector(".quiz-box");
startGameTextEl = document.querySelector(".start-game-text");
quizButtonEl = document.querySelector(".quiz-buttons");

//function to start quiz
var startQuiz = function () {
  console.log("quiz started");
  startGameTextEl.remove();
  quizButtonEl.remove();
};
//event listener on start quiz button
startButtonEl.addEventListener("click", startQuiz);
