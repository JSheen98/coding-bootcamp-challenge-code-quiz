var startQuiz = document.querySelector("#start-quiz-button")
var startQuizScreen = document.querySelector("#start-quiz-screen")
var question1 = document.querySelector("#question-1")
var question2 = document.querySelector("#question-2")
var question3 = document.querySelector("#question-3")
var question4 = document.querySelector("#question-4")
var question5 = document.querySelector("#question-5")
var completeScreen = document.querySelector("#complete-screen")
var scoreScreen = document.querySelector("#score-screen")
var question1Button = document.querySelector(".question-1-button")
var question2Button = document.querySelector(".question-2-button")
var question3Button = document.querySelector(".question-3-button")
var question4Button = document.querySelector(".question-4-button")
var question5Button = document.querySelector(".question-5-button")
var completeButton = document.querySelector("#complete-button")
var goBackButton = document.querySelector("#restart")
var score = 00;
var timer = 60;
isCorrect = true;


function runQuiz() {
    startQuiz.addEventListener("click", function () {
        if (startQuizScreen.style.display == "") {
        }
        startQuizScreen.style.display = "none"

        if (question1.style.display == "") {
            displayValue = "flex"
        }
        question1.style.display = displayValue
    })

    question1Button.addEventListener("click", function () {
        if (question1.style.display == "flex") {   
        }
        question1.style.display = "none"

        if (question2.style.display == "") {
            displayValue = "flex"
        }
        question2.style.display = displayValue
    })

    question2Button.addEventListener("click", function () {
        if (question2.style.display == "flex") {
        }
        question2.style.display = "none"

        if (question3.style.display == "") {
            displayValue = "flex"
        }
        question3.style.display = displayValue
    })

    question3Button.addEventListener("click", function () {
        if (question3.style.display == "flex") {
        }
        question3.style.display = "none"

        if (question4.style.display == "") {
            displayValue = "flex"
        }
        question4.style.display = displayValue
    })

    question4Button.addEventListener("click", function () {
        if (question4.style.display == "flex") {
        }
        question4.style.display = "none"

        if (question5.style.display == "") {
            displayValue = "flex"
        }
        question5.style.display = displayValue
    })

    question5Button.addEventListener("click", function () {
        if (question5.style.display == "flex") {
        }
        question5.style.display = "none"

        if (scoreScreen.style.display == "") {
            displayValue = "flex"
        }
        scoreScreen.style.display = displayValue
    })

    completeButton.addEventListener("click", function () {
        if (completeScreen.style.display == "flex") {
        }
        completeScreen.style.display = "none"

        if (scoreScreen.style.display == "") {
            displayValue = "flex"
        }
        scoreScreen.style.display = displayValue
    })

    goBackButton.addEventListener("click", function () {
        if (scoreScreen.style.display == "flex") {
        }
        scoreScreen.style.display = "none"

        if (startQuizScreen.style.display == "none") {
            displayValue = "flex"
        }
        startQuizScreen.style.display = displayValue
    })
}

runQuiz();