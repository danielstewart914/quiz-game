// variables for DOM elements
var gameBoxEl = document.querySelector( '#game-container' );
var welcomeScreenEl = document.querySelector( '#welcome-screen' );
var questionBoxEl = document.querySelector( '#question-box' );
var endScreenEl = document.querySelector( '#end-screen' );
var responseBoxEl = document.querySelector( '#response-box' );
var scoreEl = document.querySelector( '#score-box' );
var timerEl = document.querySelector( '#timer' );

// other global variables
var questionPointer = 0;
var currentQuestion = questions[questionPointer];
var timerInterval;
var countdown = 30;
var score = 0;

const oneSecond = 1000;

function startTimer () {
    
    timerInterval = setInterval( function () {

        countdown--;

        if ( countdown <= 10 ) {

            timerEl.innerHTML = `<span class="low">${countdown}</span>`;

        } else {

            timerEl.textContent = countdown;
            
        }


        // if timer runs out clear question box amd print end screen
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

    scoreEl.innerHTML = 'Score: ' + score;
}

function printWelcomeScreen() {

    welcomeScreenEl.innerHTML = `
        <h2>Welcome to the JavaScript Coding Quiz Game!</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Recusandae voluptatibus eos earum officia, perspiciatis at 
            exercitationem rem qui accusantium. Iste!
        </p>
    <button id="start-button" class="button">Start Game</button>
    `;

}

function printEndScreen () {
    endScreenEl.textContent = 'End content screen here!';
    scoreEl.innerHTML = 'Score: ' + score;
}

gameBoxEl.addEventListener( 'click', function ( event ) {

    if ( event.target.id === 'start-button' ) {

        // clear welcome screen
        welcomeScreenEl.innerHTML = '';

        printQuestion();
        startTimer();

    }

    if (  event.target.classList.contains( 'answer-button' ) ) {

        console.log( 'answer button clicked' );

        var clickedAnswer = event.target.dataset.answer;

        if ( clickedAnswer === currentQuestion.correctAnswer ) {

            responseBoxEl.innerHTML = '<span class="correct">Correct!</span>';
            score++;

        } else {

            responseBoxEl.innerHTML = '<span class="wrong">Wrong!</span>';

        }

        questionPointer++;

        if ( questionPointer === questions.length ) {

            questionBoxEl.innerHTML = '';
            clearInterval( timerInterval );
            printEndScreen();

        } else {

            currentQuestion = questions[questionPointer];
            printQuestion();

        }
    }


} );