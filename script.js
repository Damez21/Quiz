var startButton = document.querySelector('#start-btn')
var nextButton = document.querySelector('#next-btn')
var startContainer = document.querySelector('.start-btn')
var questionContainer = document.querySelector('.container')
var questions = []
var randomizeQuestions, currentQuestionIndex
var answerButtonElement = document.querySelector('answer-buttons')
var questionsElement = document.querySelector('questions')


// startButton.addEventListener('click', startGame)

function startGame() {
    questionContainer.classList.remove('hide')
    startContainer.classList.add('hide');
}

startButton.addEventListener('click', startGame)
