// variables for DOM elements
var gameBoxEl = document.querySelector( '#game-container' );
var welcomeScreenEl = document.querySelector( '#welcome-screen' );
var questionBoxEl = document.querySelector( '#question-box' );
var endScreenEl = document.querySelector( '#end-screen' );
var responseBoxEl = document.querySelector( '#response-box' );
var timerEl = document.querySelector( '#timer' );

// other global variables
var questionPointer = 0;
var currentQuestion = questions[questionPointer];
var timerInterval;
var countdown = 10;
var score = 0;

const oneSecond = 1000;

function startTimer () {
    
    timerInterval = setInterval( function () {

        countdown--;

        timerEl.textContent = countdown;

        if ( !countdown ) {
            clearInterval( timerInterval );

            questionBoxEl.innerHTML = '';

            printEndScreen();
        }

    }, oneSecond );
}

function printQuestion () {
    // print question in h2 header and create 4 buttons from the question object
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

gameBoxEl.addEventListener( 'click', function ( event ) {

    if ( event.target.id === 'start-button' ) {

        // clear welcome screen
        welcomeScreenEl.innerHTML = '';

        printQuestion();
        startTimer();

    }

} );