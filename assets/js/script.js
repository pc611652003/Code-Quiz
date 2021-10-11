var Questions = [{ // Question 01
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
var answer1 = document.querySelector("answer1");

start_btn.addEventListener("click", function(evt) {
    evt.preventDefault();

    const startingPage = document.getElementById("starting-page");
    const questionPage = document.getElementById("question-page");

    startingPage.style.display = "none";
    questionPage.style.display = "block";

    //startTimer();
});

