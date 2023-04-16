var startButton = document.querySelector('#start-btn')
var nextButton = document.querySelector('#next-btn')
var quitButton = document.querySelector('#quit-btn')
var resetButton = document.querySelector('#restart')
var startContainer = document.querySelector('.start-btn')
var questionContainer = document.querySelector('.container')
var resultsContainer = document.querySelector('.results-container')
var timeRemaing = document.querySelector('.timer-sec')
var totalQuestions = document.querySelector('.number-of-questions')

var questions = [
    {
        id:"1",
        question: "Who Was The 1st Overall Pick In The 2003 Nba Draft?",
        choices:['Chris Bosh','Dwayne Wade', 'Chris Paul', 'Lebron James'],
        answer:'Lebron James'
    },
    { 
        id:"2",
        question: "How Many NBA Championships Does Kobe Bryant Have?",
        choices:['2','5', '4', '6'],
        answer:'5'

    },
    {
        id:"3",
        question: "In What Season Did The NBA 'Bubble' Take Place?",
        choices:['2018-2019','2021-2022', '2019-2020', '2020-2021'],
        answer:'2019-2020'

    },
    {
        id:"4",
        question: "Who Is The ALL TIME Leader In 3pt Made?",
        choices: ['Ray Allen', 'Stephen Curry', 'Reggie Miller', 'James Harden'],
        answer: 'Stephen Curry'
    },
    {
        id:"5",
        question: "How Many 3 pointers Did Shaquile O'Neal Make In His Career?",
        choices: ['1', '0', '5', '25'],
        answer: '1'
    },
    {
        id:"6",
        question: "Who Was The Youngest Player To Ever Play In An NBA Game?",
        choices: ['Michael Jordan', 'Kobe Bryant', 'Wilt Chamberlin', 'Andrew Bynum'],
        answer: 'Andrew Bynum'
    },
    {
        id:"7",
        question: "Which Player Holds The Most All Time Stats On The U.S. Olympic Team?",
        choices: ['Bill Russel', 'Carmelo Anthony', 'Lebron James', 'Michael Jordan'],
        answer: 'Carmelo Anthony'
    },
    {
        id:"8",
        question: "How Many Championships Does Michael Jordan Have?",
        choices: ['6', '8', '5', '3'],
        answer: '6'
    },
];



// var questions = []
// // var randomizeQuestions, currentQuestionIndex
// // var answerButtonElement = document.querySelector('answer-buttons')
// // var questionsElement = document.querySelector('questions')



function startGame() {
    questionContainer.classList.remove('hide')
    startContainer.classList.add('hide');
}

startButton.addEventListener('click', startGame)

