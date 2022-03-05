startButtonEl = document.querySelector(".start-quiz");
quizAreaEl = document.querySelector(".quiz-box");
startGameTextEl = document.querySelector(".start-game-text");
quizButtonEl = document.querySelector(".quiz-buttons");
var timer = "61";
var questionNumber = [
  "Question 1",
  "Question 2",
  "Question 3",
  "Question 4",
  "Question 5",
  "Question 6",
];
var question = [
  "Which one is NOT a data type in Javascript?",
  "What is an array?",
  "What is the difference between a local and global variable?",
  "Which one is NOT a comparison expression?",
  "Where is the script tag located in the html file?",
  "What is the purpose of a for loop?",
];

var aAnswer = [
  "a. Boolean",
  "a. A group of events",
  "a. console.log();",
  "a. Local variables only contain strings and global variables contain all data types including strings, numbers and boolean data.",
  "a. &&",
  "a. In the <head> tag",
  "a. To cycle through a set of commands a set amount of time",
];
var bAnswer = [
  "b. String",
  "b. A list of elements stored in a single variable. ",
  "b. window.alert(); ",
  "b. Local variables are defined outside functions and can be accessed anywhere in the code, whereas global variables can only be accessed in the functions they are defined in.",
  "b. ||",
  "b. At the bottom of the <body> tag ",
  "b. To tell the user the purpose of the code",
];
var cAnswer = [
  "c. Variable",
  "c.A method to do mathematical operations",
  "c.message();",
  "c. Global variables can be used by anyone around the world, local variables are only defined on your machine. ",
  "c. <=",
  "c. At the top of the <body> tag",
  "c. To compare values of variables",
];
var dAnswer = [
  "d. Number",
  "d. A type of function",
  "d. console.dir();",
  "d. Local variables can only be accessed in the functions they are defined in, whereas global variables are defined outside functions and can be used anywhere in the code.",
  "d. !!",
  "d. Before the <head> tag",
  "d. To set a timer",
];

//function to start quiz
var startQuiz = function () {
  console.log("quiz started");
  startGameTextEl.remove();
  quizButtonEl.remove();
  //setTimeout();
  startTimer();
};

/* //function to start timer
var startTimer = function (timeInterval) {
  //sets time interval
  timeInterval = setInterval(startTimer, 1000);
  //adds timer to screen
  timerBoxEl = quizAreaEl.innerHTML =
    "<span class='timer'>" + timer + "</span>";
  timer--;
  //stops timer at 0
  if (timer < 0) {
    clearInterval(timeInterval);
  }
  //displays timer on screen
  timerBoxEl.textContent = timer;
}; */
// function startTimer() {
//   timerBoxEl = quizAreaEl.innerHTML =
//     "<span class='timer'>" + timer + "</span>";
//   timeInterval = setInterval(function () {
//     timer--;
//     //displays timer on screen
//     timerBoxEl.textContent = timer;
//     if (timer < 0) {
//       clearInterval(timeInterval);
//     }
//   }, 1000);
//   return timer;
// }

var startQuestions = function () {
  questionHeader = document.createElement("h3");
  questionHeader.className = "questionHeader";
  questionHeader.textContent = questionNumber[0];
  questionText = document.createElement("div");
  questionText.className = "questionFormat";
  questionText.textContent = question[0];
  questionAnswerA = document.createElement("div");
  questionAnswerA.className = "choices";
  questionAnswerA.textContent = aAnswer[0];
  questionAnswerB = document.createElement("div");
  questionAnswerB.className = "choices";
  questionAnswerB.textContent = bAnswer[0];
  questionAnswerC = document.createElement("div");
  questionAnswerC.className = "choices";
  questionAnswerC.textContent = cAnswer[0];
  questionAnswerD = document.createElement("div");
  questionAnswerD.className = "choices";
  questionAnswerD.textContent = dAnswer[0];

  quizAreaEl.appendChild(questionHeader);
  quizAreaEl.appendChild(questionText);
  quizAreaEl.appendChild(questionAnswerA);
  quizAreaEl.appendChild(questionAnswerB);
  quizAreaEl.appendChild(questionAnswerC);
  quizAreaEl.appendChild(questionAnswerD);
};
var startTimer = function () {
  timeInterval = setInterval(timerCount, 1000);
};

var timerCount = function () {
  timerBoxEl = quizAreaEl.innerHTML =
    "<span class='timer'>" + timer + "</span>";
  timer--;
  //displays timer on screen
  timerBoxEl.textContent = timer;
  if (timer < 0) {
    clearInterval(timeInterval);
  }
};

//event listener on start quiz button
startButtonEl.addEventListener("click", startQuiz);
startButtonEl.addEventListener("click", startQuestions);
