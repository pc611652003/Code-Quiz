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
var questionNum = -1;
var correctStatement = "";
var timer = 75;
const startingPage = document.getElementById("starting-page");
const questionPage = document.getElementById("question-page");
const highscorePage = document.getElementById("highscore-page");

// React to user starting the quiz by pressing start button
var startingQuiz = function(evt) {
    evt.preventDefault();

    startingPage.style.display = "none";
    questionPage.style.display = "block";

    updateQuestion();
    startTimer();
}

// Check if the correct answer is selected
var checkingAnswer = function(buttonNum) {
    //evt.preventDefault();
    if (Questions[questionNum].correct == buttonNum) {
        correctStatement = "CORRECT !!!";
    } else {
        correctStatement = "WRONG !!!";
        timer = timer - 10;
    }
    updateQuestion();
}

// Call different answer checking according to which answer is chosen
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
var updateQuestion = function() {
    var answer1_btn = document.querySelector("#answer1-btn");
    var answer2_btn = document.querySelector("#answer2-btn");
    var answer3_btn = document.querySelector("#answer3-btn");
    var answer4_btn = document.querySelector("#answer4-btn");
    var questionText = document.querySelector("#question");
    var correctText = document.querySelector("#answerResult");

    questionNum++;
    // Update the question display unless all 10 questions are asked
    if (questionNum < 10) {
        answer1_btn.textContent = Questions[questionNum].answer1;
        answer2_btn.textContent = Questions[questionNum].answer2;
        answer3_btn.textContent = Questions[questionNum].answer3;
        answer4_btn.textContent = Questions[questionNum].answer4;
        questionText.textContent = "Question " + (questionNum + 1) + " : " + Questions[questionNum].question;
        correctText.textContent = correctStatement;
    } else {
        // End the quiz due to all questions are answered
        stopTimer();
    }
}

// Start the timer and constantly update the remaining time display
function startTimer() {
    const timeDisplay = document.getElementById("countdown");
  
    intervalID = setInterval(function () {
      timer--;
  
      timeDisplay.innerText = timer + "s";
  
      // End the quiz due to time out
      if (timer <= 0) {
        stopTimer();
      }
    }, 1000);
}

// Stop the timer and End the Quiz
function stopTimer() {
    clearInterval(intervalID);
    endGame();
}

// Load Highscore page due to the end of the quiz
function endGame() {
    questionPage.style.display = "none";
    highscorePage.style.display = "block";

    const currentScore = document.getElementById("currentScore");
    currentScore.innerText = timer;

    clearHighscoreDisplay();
    loadHighscore();
}

// Carry out different function according to different buttons pressed in Highscore page
var highscoreButtonHandler = function(event) {
    var targetEl = event.target;
  
    if (targetEl.matches("#HS-submit")) {
        submitUserInfo();
    } 
    if (targetEl.matches("#back-btn")) {
        returnStartingPage();
    } 
    if (targetEl.matches("#clear-btn")) {
        clearHighscore();
    } 
};

// Submit the non-empty name and the corresponding point to Highscore List
var submitUserInfo = function() {
    var username = document.querySelector("input[name='name']").value;
    if (username) {
        var newScore = {
            user: username,
            score: timer
        };
        console.log(username);
        updateHighscoreList(newScore);
        document.querySelector("input[name='name']").value = "";
    }
}

// Transfer back to original page, and also reset some general variables
var returnStartingPage = function() {
    highscorePage.style.display = "none";
    startingPage.style.display = "block";
    timer = 75;
    questionNum = -1;
    correctStatement = "";
    document.querySelector("input[name='name']").value = "";
    clearHighscoreDisplay();
}

// Clear all highscore record and display
var clearHighscore = function() {
    localStorage.setItem("highscoreList", "");
    clearHighscoreDisplay();
}

// Update the Highscore List
var updateHighscoreList = function(newScore) {
    var savedScore = localStorage.getItem("highscoreList");
    var scoreAdded = false;
    var temparoryScore = [];
  
    // if no existing High score
    //  -> just add the new score
    if (!savedScore) {
        temparoryScore.push(newScore);
        localStorage.setItem("highscoreList", JSON.stringify(temparoryScore));
    } else {
        // if High score existed
        //  -> Run through the list and add the score on top of same or lower scores
        savedScore = JSON.parse(savedScore);
        for (var i = 0; i < savedScore.length; i++) {
            if (!scoreAdded) {
                if (savedScore[i].score > newScore.score) {
                    // Add score that is higher than current score
                    temparoryScore.push(savedScore[i]);
                } else {
                    // Add the current score when find the same/lower score
                    // Also change flag to true to indicate no check needed anymore
                    temparoryScore.push(newScore);
                    temparoryScore.push(savedScore[i]);
                    scoreAdded = true;
                }
            }
            else {
                // Add the rest of the highscore list
                temparoryScore.push(savedScore[i]);
            }
        }
        // If the current score is the lowest
        //  -> add it at the end.
        if (!scoreAdded) {
            temparoryScore.push(newScore);
        }
        localStorage.setItem("highscoreList", JSON.stringify(temparoryScore));
    }

    // Reload the Highscore display
    clearHighscoreDisplay();
    loadHighscore();   
}

// Load the stored highscore list
var loadHighscore = function () {
    var savedScore = localStorage.getItem("highscoreList");
    var HSList = document.getElementById("HS-list");

    if (savedScore) {
        savedScore = JSON.parse(savedScore);
        console.log(savedScore.length);
        for (var i = 0; i < savedScore.length; i++) {
            var HSli = document.createElement("li");
            var HSuser = document.createElement("h3");
            var HSscore = document.createElement("h3");

            HSuser.textContent = savedScore[i].user;
            HSscore.textContent = savedScore[i].score;
            HSList.appendChild(HSli);
            HSli.appendChild(HSuser);
            HSli.appendChild(HSscore);

            if ((i % 2) == 0) {
                HSli.setAttribute("style", "display: flex; justify-content: space-between; margin: 0vw; padding: 0vw; background-color: silver;");
            } else {
                HSli.setAttribute("style", "display: flex; justify-content: space-between; margin: 0vw; padding: 0vw; background-color: wheat;");
            }
            HSuser.setAttribute("style", "text-align: start; margin: 0vw; padding: 0vw;");
            HSscore.setAttribute("style", "text-align: end; margin: 0vw; padding: 0vw;");
        }
    }
}

var clearHighscoreDisplay = function() {
    var HSList = document.getElementById("HS-list");
    HSList.innerText = "";
}

// Start the event listener to start everything
start_btn.addEventListener("click", startingQuiz);
questionPage.addEventListener("click", questionButtonHandler);
highscorePage.addEventListener("click", highscoreButtonHandler);
