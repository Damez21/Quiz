var startButton = document.querySelector('#start-btn')
var questionContainer = document.querySelector('.container')
var startContainer = document.querySelector('.start-btn')
var questions
var randomizedQuestions, currentQuestionIndex
var answerButtonElement = document.querySelector('answer-buttons')
var questionsElement = document.querySelector('questions')


startButton.addEventListener('click', startGame)

function startGame() {
    startContainer.classList.add('hide')
    questionContainer.classList.remove('hide')
    // startContainer.classList.add('hide')

randomizedQuestions = questions.sort(() => Math.random() )
 currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(randomizedQuestions[currentQuestionIndex])
 }

function showQuestion(questions) {
    questionsElement.innerText = questions.questions
    questions.answer.forEach(element => {
        var answerButtons = document.createElement('answer-buttons')
        answerButtons.innerText = answer.text 
        answerButtons.classList.add('btn')
        if (answer.correct) {
            answerButtons.dataset.correct = answer.correct
        }
        answerButtons.addEventListener('click', selectAnswer)
        answerButtonElement.appendchild(answerButtons)
    });

}

function selectAnswer() {

 }

// Who Was The 1st Overall Pick In The 2003 Nba Draft???
// Chris Bosh
// Dwayne Wade
// Chris Paul
// Lebron James

// How Many NBA Championships Does Kobe Bryant Have?
// 2
// 5
// 4
// 6

// In What Season Did The NBA "Bubble" Take Place?
// 2018-2019
// 2021-2022
// 2019-2020
// 2020-2021

// Who Is The ALL TIME Leader In 3pt Made?
// Ray Allen
// Steph Curry
// Reggie Miller
// James Harden

// How Many 3 pointers Did Shaquile O'Neal Make In His Career?
// 1
// 0
// 5
// 25

// Who Was The Youngest Player To Ever Play In An NBA Game?
// Michael Jordan
// Kobe Bryant
// Wilt Chamberlin
// Andrew Bynum

// Which Player Holds The Most All Time Stats On The U.S. Olympic Team?
// Bill Russel
// Carmelo Anthony
// Lebron James
// Michael Jordan

// How Many Championships Does Michael Jordan Have?
// 6
// 8
// 5
// 3
