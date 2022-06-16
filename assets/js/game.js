// variables for DOM elements
var gameBoxEl = document.querySelector( '#game-container' );
var welcomeScreenEl = document.querySelector( '#welcome-screen' );
var questionBoxEl = document.querySelector( '#question-box' );
var endScreenEl = document.querySelector( '#end-screen' );
var responseBoxEl = document.querySelector( '#response-box' );

// other global variables
var questionPointer = 0;
var currentQuestion = questions[questionPointer];
var timerInterval;
var countdown = 75;
var score = 0;

const oneSecond = 1000;

function startTimer() {

}

function printQuestion () {
    questionBoxEl.innerHTML =  `
        <h2>${currentQuestion.question}</h2>
        <button data-answer="${currentQuestion.answers[0]}" class="answer-button button">${currentQuestion.answers[0]}</button>
        <button data-answer="${currentQuestion.answers[1]}" class="answer-button button">${currentQuestion.answers[1]}</button>
        <button data-answer="${currentQuestion.answers[2]}" class="answer-button button">${currentQuestion.answers[2]}</button>
        <button data-answer="${currentQuestion.answers[3]}" class="answer-button button">${currentQuestion.answers[3]}</button>
    `;
}

function printEndScreen () {

}

printQuestion();


gameBoxEl.addEventListener( 'click', function ( event ) {

} );