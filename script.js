var startButton = document.querySelector('#start-btn')
var nextButton = document.querySelector('#next-btn')
var quitButton = document.querySelector('#quit-btn')
var restartButton = document.querySelector('#restart')
var answerButtons = document.querySelector('#answer-buttons')
var startContainer = document.querySelector('.start-btn')
var questionContainer = document.querySelector('.container')
var resultsContainer = document.querySelector('.results-container')
var timeRemaing = document.querySelector('.timer-sec')
var totalQuestions = document.querySelector('.number-of-questions')
var results = document.querySelector('#results')
var questionCount;
var scoreCount = 0;
var count = 15;
var countdown;


var questionsArray = [
    {
        id:"0",
        question: "Who Was The 1st Overall Pick In The 2003 Nba Draft?",
        choices:['Chris Bosh','Dwayne Wade', 'Chris Paul', 'Lebron James'],
        answer:'Lebron James'
    },
    { 
        id:"1",
        question: "How Many NBA Championships Does Kobe Bryant Have?",
        choices:['2','5', '4', '6'],
        answer:'5'

    },
    {
        id:"2",
        question: "In What Season Did The NBA 'Bubble' Take Place?",
        choices:['2018-2019','2021-2022', '2019-2020', '2020-2021'],
        answer:'2019-2020'

    },
    {
        id:"3",
        question: "Who Is The ALL TIME Leader In 3pt Made?",
        choices: ['Ray Allen', 'Stephen Curry', 'Reggie Miller', 'James Harden'],
        answer: 'Stephen Curry'
    },
    {
        id:"4",
        question: "How Many 3 pointers Did Shaquile O'Neal Make In His Career?",
        choices: ['1', '0', '5', '25'],
        answer: '1'
    },
    {
        id:"5",
        question: "Who Was The Youngest Player To Ever Play In An NBA Game?",
        choices: ['Michael Jordan', 'Kobe Bryant', 'Wilt Chamberlin', 'Andrew Bynum'],
        answer: 'Andrew Bynum'
    },
    {
        id:"6",
        question: "Which Player Holds The Most All Time Stats On The U.S. Olympic Team?",
        choices: ['Bill Russel', 'Carmelo Anthony', 'Lebron James', 'Michael Jordan'],
        answer: 'Carmelo Anthony'
    },
    {
        id:"7",
        question: "How Many Championships Does Michael Jordan Have?",
        choices: ['6', '8', '5', '3'],
        answer: '6'
    },
];



// // var randomizeQuestions, currentQuestionIndex
// // var answerButtonElement = document.querySelector('answer-buttons')
// // var questionsElement = document.querySelector('questions')



function startGame() {
    questionContainer.classList.remove('hide')
    startContainer.classList.add('hide');
}

startButton.addEventListener('click', startGame)



restart.addEventListener("click", () => {
    initial();
    questionContainer.classList.remove("hide")
    resultsContainer.classList.add("hide")
});

nextButton.addEventListener("click", (displayNext = () =>{
    questionCount += 1;

    if(questionCount == questionsArray.length){
        container.classList.add("hide");
        resultsContainer.remove("hide");
        results.innerHTML = "You answer is " +
        scoreCount + " out of " + questionCount;
    }
    else{
        totalQuestions.innerHTML = questionCount + 1 + " of " + questionsArray.length + "Questions";

        questionDisplay(questionCount);
        count = 15;
        clearInterval(countdown);
        timerDisplay();
    }

}))

var timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeRemaing.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

var questionDisplay = (questionCount) =>{
    let questionCards = document.querySelectorAll(".container-mid");

    questionCards.forEach((card) =>{
        card.classList.add("hide");
    });
    // questionCards[questionCount].classList.remove("hide");
};

function questionCreator() {
    questionsArray.sort(() => Math.random() - 0.5);
    
    for (let i of questionsArray) {
        i.answersButtons.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        totalQuestions.innerHTML = 1 + " of " + questionsArray. length + "Questions";

        let question_div = document.createElement("p");
        question_div.classList.add("question");
        question_div.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="btn" onclick="checker(this)">
        ${i.answer[0]}</button
        <button class="btn" onclick="checker(this)">
        ${i.answer[1]}</button
        <button class="btn" onclick="checker(this)">
        ${i.answer[2]}</button
        <button class="btn" onclick="checker(this)">
        ${i.answer[3]}</button
        
        `;

        questionContainer.appendChild(div);
    }
}

function checker(userAnswer){
    let userSolution = userAnswer.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let answers = question.querySelectorAll("answer-div");

    if(userSolution === questionsArray[questionCount].correct) {
        userAnswer.classList.add("correct");
        scoreCount++;
    } else {
        userAnswer.classList.add("incorrect");

        answers.forEach((element) => {
            if ((element.innerText = questionsArray[questionCount].correct)) {
                element.classList.add("correct");
            }
        });
    }
    
    clearInterval(countdown);
    answers.forEach((element) => {
        element.disabled = true;
    });
}

function initial() {
    questionContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    scoreCount = 0;
    count = 15;
    clearInterval(countdown);
    timerDisplay();
    questionCreator();
    questionDisplay(questionCount);
}

// startButton.addEventListener("click", () => {
//     startContainer.addEventListener.add("hide");
//     questionContainer.classList.remove("hide");
//     initial();
// });

// window.onload = () => {
//     startContainer.classList.remove("hide");
//     questionContainer.classList.add("hide");
// };