var startQuiz = document.querySelector("#start-quiz-button")
var startQuizScreen = document.querySelector("#start-quiz-screen")
var question1 = document.querySelector("#question-1")
var question2 = document.querySelector("#question-2")
var question3 = document.querySelector("#question-3")
var question4 = document.querySelector("#question-4")
var question5 = document.querySelector("#question-5")
var question6 = document.querySelector("#question-6")
var question7 = document.querySelector("#question-7")
var question8 = document.querySelector("#question-8")
var question9 = document.querySelector("#question-9")
var question10 = document.querySelector("#question-10")
var completeScreen = document.querySelector("#complete-screen")
var scoreScreen = document.querySelector("#score-screen")
var question1Button = document.querySelectorAll(".question-1-button")
var question2Button = document.querySelectorAll(".question-2-button")
var question3Button = document.querySelectorAll(".question-3-button")
var question4Button = document.querySelectorAll(".question-4-button")
var question5Button = document.querySelectorAll(".question-5-button")
var question6Button = document.querySelectorAll(".question-6-button")
var question7Button = document.querySelectorAll(".question-7-button")
var question8Button = document.querySelectorAll(".question-8-button")
var question9Button = document.querySelectorAll(".question-9-button")
var question10Button = document.querySelectorAll(".question-10-button")
var submitButton = document.querySelector("#submit-button")
var goBackButton = document.querySelector("#restart")
var clearScoresButton = document.querySelector("#clear-score")
var highScoresButton = document.querySelector("#high-scores-button")
var isCorrectCaption = document.querySelector("#is-correct-caption")
var gameOver = document.querySelector("#game-over")
var isIncorrectCaption = document.querySelector("#is-incorrect-caption")
var timerEl = document.querySelector("#timer")
var scoreEl = document.querySelector("#final-score")
var leaderboardEl = document.querySelector("#scores")
var score = 00;
var timer;
var initialsInput = document.querySelector("#initials")
isCorrect = true;

// Function that starts the timer, and clears the timer at 0 seconds
function startTime() {
    timer = 60;
    let interval = setInterval(() => {
        timer--;
        if (timer === 0) {
            clearInterval(interval)
            // Displays time up caption, hides isCorrect and isIncorrect if shown
            gameOver.style.display = "block"
            isCorrectCaption.style.display = "none"
            isIncorrectCaption.style.display = "none"
            // Sends user to expected complete screen, and displays other screens as none
            completeScreen.style.display = "flex"
            question1.style.display = "none"
            question2.style.display = "none"
            question3.style.display = "none"
            question4.style.display = "none"
            question5.style.display = "none"
            question6.style.display = "none"
            question7.style.display = "none"
            question8.style.display = "none"
            question9.style.display = "none"
            question10.style.display = "none"
        }

        timerEl.innerHTML = `Time: ${timer}`
    }, 1000);
}

// Main function for quiz navigation
function runQuiz() {
    startQuiz.addEventListener("click", function () {
        // Calls the timer function to start when user clicks 'start quiz'
        startTime()
        startQuizScreen.style.display = "none"
        highScoresButton.style.display = "none"

        if (question1.style.display == "") {
            displayValue = "flex"
        }
        question1.style.display = displayValue
    })

    // For loop that iterates through each question and allows the user to press any of the buttons to get to the next screen
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
            question5.style.display = "none"
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

            if (question6.style.display == "") {
                displayValue = "flex"
            }
            question6.style.display = displayValue
        })

        question6Button[i].addEventListener("click", function (event) {
            question6.style.display = "none"
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

            if (question7.style.display == "") {
                displayValue = "flex"
            }
            question7.style.display = displayValue
        })

        question7Button[i].addEventListener("click", function (event) {
            question7.style.display = "none"
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

            if (question8.style.display == "") {
                displayValue = "flex"
            }
            question8.style.display = displayValue
        })

        question8Button[i].addEventListener("click", function (event) {
            question8.style.display = "none"
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

            if (question9.style.display == "") {
                displayValue = "flex"
            }
            question9.style.display = displayValue
        })

        question9Button[i].addEventListener("click", function (event) {
            question9.style.display = "none"
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

            if (question10.style.display == "") {
                displayValue = "flex"
            }
            question10.style.display = displayValue
        })

        question10Button[i].addEventListener("click", function (event) {
            if (question10.style.display == "flex") {
            }
            question10.style.display = "none"
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

    // Submits the user's initials, and saves them in local storage, as well as the score
    submitButton.addEventListener("click", function (event) {
        event.preventDefault()
        isCorrectCaption.style.display = "none"
        isIncorrectCaption.style.display = "none"
        highScoresButton.style.display = "none"
        completeScreen.style.display = "none"

        let localStorageData = JSON.parse(localStorage.getItem('quiz_score'));

        var userScore = {
            initialsInput: initialsInput.value,
            score: score
        }

        if (localStorageData === null) {
            localStorageData = []
            localStorageData.push(userScore)
        } else {
            localStorageData.push(userScore)
        }

        
        localStorage.setItem('quiz_score', JSON.stringify(localStorageData))

        listUsers()

        if (scoreScreen.style.display == "") {
            displayValue = "flex"
        }
        scoreScreen.style.display = displayValue
        timer = 0;
        score = 0;
        gameOver.style.display = "none"
    })

    // Function to create a table and list user's initials and scores through Local Storage
    function listUsers() {
        let userList = JSON.parse(localStorage.getItem('quiz_score'))

        let table = document.createElement('table');

        let tr = document.createElement('tr')

        let th_name = document.createElement('th')
        th_name.innerHTML = 'Name'
        let th_score = document.createElement('th')
        th_score.innerHTML = 'Score'

        tr.append(th_name, th_score);
        table.append(tr)
        
        // If userList is not null, then loop through and put a new line on table with new user initials and score
        if (userList != null) {
            let sortedArray = userList.sort(function (a, b) { return b.score - a.score })

            for (let i = 0; i < sortedArray.length; i++) {
                let tr = document.createElement('tr');

                let td_name = document.createElement('td')
                td_name.innerHTML = sortedArray[i].initialsInput
                let td_score = document.createElement('td')
                td_score.innerHTML = sortedArray[i].score

                tr.append(td_name, td_score)
                table.append(tr)

            }
            
        } else { // Otherwise, (if it is null), then display the user intials and score as N/A
            let tr = document.createElement('tr');

            let td_name = document.createElement('td')
            td_name.innerHTML = 'N/A'
            let td_score = document.createElement('td')
            td_score.innerHTML = 'N/A'

            tr.append(td_name, td_score)
            table.append(tr)
        }

        leaderboardEl.append(table)
    
    }

    // Takes user back to the start quiz screen
    goBackButton.addEventListener("click", function () {
        scoreScreen.style.display = "none"
        highScoresButton.style.display = "block"

        if (startQuizScreen.style.display == "none") {
            displayValue = "flex"
        }
        startQuizScreen.style.display = displayValue
        leaderboardEl.innerHTML = ``
    })

    // Clears the local storage, and removes any saved text from the score box
    clearScoresButton.addEventListener("click", function () {
        localStorage.clear()
        leaderboardEl.innerHTML = ``
    })

    // Makes this button display the High Score screen as "flex", display all other screens as "none", and resets timer and score  
    highScoresButton.addEventListener("click", function () {
        timer = 1
        startQuizScreen.style.display = "none"
        question1.style.display = "none"
        question2.style.display = "none"
        question3.style.display = "none"
        question4.style.display = "none"
        question5.style.display = "none"
        question6.style.display = "none"
        question7.style.display = "none"
        question8.style.display = "none"
        question9.style.display = "none"
        question10.style.display = "none"
        completeScreen.style.display = "none"
        scoreScreen.style.display = "flex"
        gameOver.style.display = "none"
        highScoresButton.style.display = "none"
        score = 0

        listUsers()
    })
}

// Function to display the word 'correct' or 'incorrect' given the user's answer
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

// Function that gives the user points and displays them at the end of the quiz. Resets when quiz starts over.
function givePoints(isCorrect) {
    if (isCorrect) {
        score += 10;
    }
    scoreEl.innerHTML = `Your final score is: ${score}`
}

// Function that removes time from the timer, if the question is incorrect
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