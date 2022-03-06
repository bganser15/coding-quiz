startButtonEl = document.querySelector(".start-quiz");
quizAreaEl = document.querySelector(".quiz-box");
startGameTextEl = document.querySelector(".start-game-text");
quizButtonEl = document.querySelector(".quiz-buttons");
//sets quiz header and questions display to none
quizContainerEl = document.querySelector(".quiz-container");
quizContainerEl.style.display = "none";
//defines question header and question
questionHeaderEl = document.querySelector(".questionHeader");
questionEl = document.querySelector(".questionFormat");

timerBoxEl = document.querySelector(".timerBox");
answerButtonEl = document.querySelector(".choices");

//answerbuttons
buttonAEl = document.getElementById("A");
buttonBEl = document.getElementById("B");
buttonCEl = document.getElementById("C");
buttonDEl = document.getElementById("D");
var timer = "60";
var score = "0";
//questions and answers
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

//function to start quiz (remove intro page, display first question and start timer)
var startQuiz = function () {
  console.log("quiz started");
  startGameTextEl.remove();
  quizButtonEl.remove();
  quizContainerEl.style.display = "block";
  questionHeaderEl.textContent = questionNumber[0];
  questionEl.textContent = question[0];
  buttonAEl.textContent = aAnswer[0];
  buttonBEl.textContent = bAnswer[0];
  buttonCEl.textContent = cAnswer[0];
  buttonDEl.textContent = dAnswer[0];
  //start timer
  startTimer();
};

//sets timer interval
var startTimer = function () {
  timeInterval = setInterval(timerCount, 1000);
};
//adds timer to pge
var timerCount = function () {
  //displays timer on screen
  timerBoxEl.textContent = timer;

  timer--;
  if (timer < 0) {
    clearInterval(timeInterval);
  }
};
var setQuestion1 = function () {
  buttonAEl.createTextNode = aAnswer[0];
  buttonBEl.textContent = bAnswer[0];
  buttonCEl.textContent = cAnswer[0];
  buttonDEl.textContent = dAnswer[0];
};
//function to check correct answer on question 1
var checkQuestion1 = function (event) {
  targetButton = event.target;
  //if correct
  if (targetButton.matches("#C")) {
    console.log("correct");
    buttonCEl.style.backgroundColor = "green";
    score++;
    console.log(score);

    //if wrong
  } else if (targetButton.matches("#A")) {
    buttonCEl.style.backgroundColor = "green";
    buttonAEl.style.backgroundColor = "red";
    buttonBEl.style.backgroundColor = "red";
    buttonDEl.style.backgroundColor = "red";
    console.log("not c");
    timer -= 5;
    console.log(timer);
  } else if (targetButton.matches("#B")) {
    buttonCEl.style.backgroundColor = "green";
    buttonAEl.style.backgroundColor = "red";
    buttonBEl.style.backgroundColor = "red";
    buttonDEl.style.backgroundColor = "red";
    console.log("not c");
    timer -= 5;
  } else if (targetButton.matches("#D")) {
    buttonCEl.style.backgroundColor = "green";
    buttonAEl.style.backgroundColor = "red";
    buttonBEl.style.backgroundColor = "red";
    buttonDEl.style.backgroundColor = "red";
    console.log("not c");
    timer -= 5;
    console.log(timer);
  }
};

var setQuestion2 = function () {
  questionHeaderEl.textContent = questionNumber[1];
  questionEl.textContent = question[1];
  buttonAEl.textContent = aAnswer[1];
  buttonBEl.textContent = bAnswer[1];
  buttonCEl.textContent = cAnswer[1];
  buttonDEl.textContent = dAnswer[1];
  buttonCEl.style.backgroundColor = "";
  buttonAEl.style.backgroundColor = "";
  buttonBEl.style.backgroundColor = "";
  buttonDEl.style.backgroundColor = "";
};

//event listener on start quiz button
startButtonEl.addEventListener("click", startQuiz);
//startButtonEl.addEventListener("click", startQuestions);
quizContainerEl.addEventListener("click", checkQuestion1);
