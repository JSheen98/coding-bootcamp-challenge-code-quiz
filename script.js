var startQuiz = document.querySelector("#start-quiz-button")
var startQuizScreen = document.querySelector("#start-quiz-screen")
var question1 = document.querySelector("#question-1")
var question2 = document.querySelector("#question-2")
var question3 = document.querySelector("#question-3")
var question4 = document.querySelector("#question-4")
var question5 = document.querySelector("#question-5")
var completeScreen = document.querySelector("#complete-screen")
var scoreScreen = document.querySelector("#score-screen")
var question1Button = document.querySelectorAll(".question-1-button")
var question2Button = document.querySelectorAll(".question-2-button")
var question3Button = document.querySelectorAll(".question-3-button")
var question4Button = document.querySelectorAll(".question-4-button")
var question5Button = document.querySelectorAll(".question-5-button")
var completeButton = document.querySelector("#complete-button")
var goBackButton = document.querySelector("#restart")
var highScoresButton = document.querySelector("#high-scores-button")
var isCorrectCaption = document.querySelector("#is-correct-caption")
var gameOver = document.querySelector("#game-over")
var isIncorrectCaption = document.querySelector("#is-incorrect-caption")
var timerEl = document.querySelector("#timer")
var scoreEl = document.querySelector("#final-score")
var score = 00;
var timer;
isCorrect = true;

// function that starts the timer, and clears the timer at 0 seconds
function startTime() {
    timer = 60;
    let interval = setInterval(() => {
        timer--;
        if (timer === 0) {
            clearInterval(interval)
            // displays time up caption, hides isCorrect and isIncorrect if shown
            gameOver.style.display = "block"
            isCorrectCaption.style.display = "none"
            isIncorrectCaption.style.display = "none"
            // sends user to expected complete screen, and displays other screens as none
            completeScreen.style.display = "flex"
            question1.style.display = "none"
            question2.style.display = "none"
            question3.style.display = "none"
            question4.style.display = "none"
            question5.style.display = "none"
        }

        timerEl.innerHTML = `Time: ${timer}`
    }, 1000);
}

// main function for quiz navigation
function runQuiz() {
    startQuiz.addEventListener("click", function () {
        //calls the timer function to start when user clicks 'start quiz'
        startTime()
        startQuizScreen.style.display = "none"
        highScoresButton.style.display = "none"

        if (question1.style.display == "") {
            displayValue = "flex"
        }
        question1.style.display = displayValue
    })

    // For loop for each question that allows the user to press any of the buttons to get to the next screen
    for (let i = 0; i < question1Button.length; i++) {       
        question1Button[i].addEventListener("click", function (event) {
            question1.style.display = "none"
            highScoresButton.style.display = "none"
            let userChoice = event.target.dataset.answer;

            if (userChoice === "correct") {
                displayAnswer(true)
                givePoints(true)
            }
            else {
                displayAnswer(false)
                subtractTime(true)
            }

            if (question2.style.display == "") {
                displayValue = "flex"
            }
            question2.style.display = displayValue
        })

        question2Button[i].addEventListener("click", function (event) {
            question2.style.display = "none"
            highScoresButton.style.display = "none"
            let userChoice = event.target.dataset.answer;

            if (userChoice === "correct") {
                displayAnswer(true)
                givePoints(true)
            }
            else {
                displayAnswer(false)
                subtractTime(true)
            }

            if (question3.style.display == "") {
                displayValue = "flex"
            }
            question3.style.display = displayValue
        })

        question3Button[i].addEventListener("click", function (event) {
            question3.style.display = "none"
            highScoresButton.style.display = "none"
            let userChoice = event.target.dataset.answer;

            if (userChoice === "correct") {
                displayAnswer(true)
                givePoints(true)
            }
            else {
                displayAnswer(false)
                subtractTime(true)
            }

            if (question4.style.display == "") {
                displayValue = "flex"
            }
            question4.style.display = displayValue
        })

        question4Button[i].addEventListener("click", function (event) {
            question4.style.display = "none"
            highScoresButton.style.display = "none"
            let userChoice = event.target.dataset.answer;

            if (userChoice === "correct") {
                displayAnswer(true)
                givePoints(true)
            }
            else {
                displayAnswer(false)
                subtractTime(true)
            }

            if (question5.style.display == "") {
                displayValue = "flex"
            }
            question5.style.display = displayValue
        })

        question5Button[i].addEventListener("click", function (event) {
            if (question5.style.display == "flex") {
            }
            question5.style.display = "none"
            highScoresButton.style.display = "block"
            let userChoice = event.target.dataset.answer;

            if (userChoice === "correct") {
                displayAnswer(true)
                givePoints(true)
            }
            else {
                displayAnswer(false)
                subtractTime(true)
            }

            if (completeScreen.style.display == "") {
                displayValue = "flex"
            }
            completeScreen.style.display = displayValue
            timer = 1;
        })

    }

    completeButton.addEventListener("click", function (event) {
        event.preventDefault()
        isCorrectCaption.style.display = "none"
        isIncorrectCaption.style.display = "none"
        highScoresButton.style.display = "none"

        completeScreen.style.display = "none"

        if (scoreScreen.style.display == "") {
            displayValue = "flex"
        }
        scoreScreen.style.display = displayValue
        timer = 0;
        score = 0;
        gameOver.style.display = "none"
    })

    goBackButton.addEventListener("click", function () {
        scoreScreen.style.display = "none"
        highScoresButton.style.display = "block"

        if (startQuizScreen.style.display == "none") {
            displayValue = "flex"
        }
        startQuizScreen.style.display = displayValue
    })

    highScoresButton.addEventListener("click", function() {
        timer = 1
        startQuizScreen.style.display = "none"
        question1.style.display = "none"
        question2.style.display = "none"
        question3.style.display = "none"
        question4.style.display = "none"
        question5.style.display = "none"
        completeScreen.style.display = "none"
        scoreScreen.style.display = "flex"
        completeScreen.style.display = "none"
        gameOver.style.display = "none"
        highScoresButton.style.display = "none"
        score = 0
    })
}

// function to display the word 'correct' or 'incorrect' given the user's answer
function displayAnswer(isCorrect) {
    if (isCorrect) {
        isCorrectCaption.style.display = "block"
        isIncorrectCaption.style.display = "none"
    }
    else {
        isIncorrectCaption.style.display = "block"
        isCorrectCaption.style.display = "none"
    }
}

// function that gives the user points and displays them at the end of the quiz. Resets when quiz starts over.
function givePoints(isCorrect) {
    if (isCorrect) {
        score += 10;
    }
    scoreEl.innerHTML = `Your final score is: ${score}`
}

// function that removes time from the timer, if the question is incorrect
function subtractTime(isIncorrect) {
    if (isIncorrect) {
        if (timer > 10) {
            timer -= 10
        }
        else {
            timer = 1;
        }
    }
}

runQuiz();