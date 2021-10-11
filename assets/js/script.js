const Questions = [{ // Question 01
    question: "Which of the following location is the best to put <script> element in the HTML file?",
    answer1: "At the start of the <head> element",
    answer2: "At the start of the <body> element",
    answer3: "At the end of the <head> element",
    answer4: "At the end of the <body> element",
    correct: 4
}, { // Question 02
    question: "Which of the following keyword is not used for variable declaration?",
    answer1: "const",
    answer2: "for",
    answer3: "let",
    answer4: "var",
    correct: 2
}, { // Question 03
    question: "Which of the following pair are not variable types?",
    answer1: "for and while",
    answer2: "integer and float",
    answer3: "string and boolean",
    answer4: "array and object",
    correct: 1
}, { // Question 04
    question: "Which of the following values is NOT considered FALSE?",
    answer1: "0",
    answer2: "''",
    answer3: "' '",
    answer4: "null",
    correct: 3
}, { // Question 05
    question: "What is the index of the first element of an array?",
    answer1: "-1",
    answer2: "0",
    answer3: "1",
    answer4: "2",
    correct: 2
}, { // Question 06
    question: "Which of the following operators is not used for comparing values?",
    answer1: "<=",
    answer2: "!=",
    answer3: "==",
    answer4: "++",
    correct: 4
}, { // Question 07
    question: "Which of the following statements is the best for doing repeating jobs for all data?",
    answer1: "if/else statement",
    answer2: "for loop statement",
    answer3: "while loop statement",
    answer4: "switch statement",
    correct: 2
}, { // Question 08
    question: "Which of the following statements is the best for doing repeating jobs and stop under certain condition?",
    answer1: "if/else statement",
    answer2: "for loop statement",
    answer3: "while loop statement",
    answer4: "switch statement",
    correct: 3
}, {  // Question 09
    question: "Which of the following lines is invalid to declare function?",
    answer1: "function doSomething() { ... }",
    answer2: "var something = function() { ... }",
    answer3: "var something = function(someData) { ... }",
    answer4: "None of the above",
    correct: 4
}, { // Question 10
    question: "Which of the following statements is not a reason to comment in JavaScript?",
    answer1: "Create beautiful patterns in codes",
    answer2: "Provide explanation of the codes",
    answer3: "Creating pseudo-code to help coding",
    answer4: "Dividing codes into separate parts to provide clearer logic",
    correct: 1
}];
const start_btn = document.querySelector("#start-btn");
var answer1_btn = document.querySelector("#answer1-btn");
var answer2_btn = document.querySelector("#answer2-btn");
var answer3_btn = document.querySelector("#answer3-btn");
var answer4_btn = document.querySelector("#answer4-btn");
var questionNum = 0;
var correctStatement = "";
var timer = 75;
var questionText = document.querySelector("#question");
var correctText = document.querySelector("#answerResult");
var questionPage = document.querySelector("#question-page");

// React to user starting the quiz by pressing start button
var startingQuiz = function(evt) {
    evt.preventDefault();
    console.log("pressed");

    const startingPage = document.getElementById("starting-page");
    const questionPage = document.getElementById("question-page");

    startingPage.style.display = "none";
    questionPage.style.display = "block";

    start_btn.disabled = true;
    displayQuestion();
    startTimer();
}

// Check if the correct answer is selected
var checkingAnswer = function(buttonNum) {
    //evt.preventDefault();
    console.log(buttonNum);
    if (Questions[questionNum].correct == buttonNum) {
        console.log(buttonNum + " is the right answer!");
    } else {
        console.log(buttonNum + " is not the right answer!");
        timer = timer - 10;
    }
}

// Check which answer is chosen
var questionButtonHandler = function(event) {
    var targetEl = event.target;
  
    if (targetEl.matches("#answer1-btn")) {
        checkingAnswer(1);
    } 
    if (targetEl.matches("#answer2-btn")) {
        checkingAnswer(2);
    } 
    if (targetEl.matches("#answer3-btn")) {
        checkingAnswer(3);
    } 
    if (targetEl.matches("#answer4-btn")) {
        checkingAnswer(4);
    } 
};

// Update the display of the question page
var displayQuestion = function() {
    answer1_btn.textContent = Questions[questionNum].answer1;
    answer2_btn.textContent = Questions[questionNum].answer2;
    answer3_btn.textContent = Questions[questionNum].answer3;
    answer4_btn.textContent = Questions[questionNum].answer4;
    questionText.textContent = Questions[questionNum].question;
    correctText.textContent = correctStatement;
}

function startTimer() {
    const timeDisplay = document.getElementById("countdown");
  
    intervalID = setInterval(function () {
      timer--;
  
      timeDisplay.innerText = timer + "s";
  
      if (timer <= 0) {
        stopTimer();
      }
    }, 1000);
}
  
function stopTimer() {
    clearInterval(intervalID);
    endGame();
}

function endGame() {
    const questionPage = document.getElementById("question-page");
    const highscorePage = document.getElementById("highscore-page");

    questionPage.style.display = "none";
    highscorePage.style.display = "block";

    const currentScore = document.getElementById("currentScore");
    currentScore.innerText = timer;
}

// Start the event listener to start everything
start_btn.addEventListener("click", startingQuiz);
questionPage.addEventListener("click", questionButtonHandler);
