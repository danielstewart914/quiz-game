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

        // if countdown is 10 or below start pulsing the timer
        if ( countdown <= 10 ) {

            timerEl.innerHTML = `<span class="low">${countdown}</span>`;

        } else {

            timerEl.children[0].textContent = countdown;

        }


        // if timer runs out clear question box amd print end screen
        if ( countdown <= 0 ) {
            clearInterval( timerInterval );

            countdown = 0;

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
    timerEl.innerHTML = `<span class="pulse">${countdown}</span>`;
    scoreEl.innerHTML = `<span class="pulse">${score}</span>`;

    var addScoreTimer = setInterval( function () {

        if ( countdown <= 0 ) {
        
            clearInterval( addScoreTimer );

        } else {

            countdown--;
            score++;

            timerEl.children[0].textContent = countdown;
            scoreEl.children[0].textContent = score;

        }

    }, 50 );
}


// listen for click events in main content box
gameBoxEl.addEventListener( 'click', function ( event ) {

    if ( event.target.id === 'start-button' ) {

        // clear welcome screen
        welcomeScreenEl.innerHTML = '';

        // print first question
        printQuestion();
        startTimer();

    }

    // if you an answer button is clicked check against the correct answer
    if (  event.target.classList.contains( 'answer-button' ) ) {

        console.log( 'answer button clicked' );

        var clickedAnswer = event.target.dataset.answer;

        if ( clickedAnswer === currentQuestion.correctAnswer ) {

            responseBoxEl.innerHTML = '<span class="correct">Correct!</span>';
            score++;

        } else {

            responseBoxEl.innerHTML = '<span class="wrong">Wrong!</span>';
            countdown -= 5;

            if ( countdown < 0 ) {

                countdown = 0;

            }            

            timerEl.innerHTML = `<span class="subtract">${countdown}</span>`;

        }

        questionPointer++;

        // if we reach the end of the question array end game else continue
        if ( questionPointer === questions.length ) {

            // clear question box
            questionBoxEl.innerHTML = '';

            // stop timer
            clearInterval( timerInterval );

            // print the end game screen
            printEndScreen();

        } else {
            // print next question to the screen
            currentQuestion = questions[questionPointer];
            printQuestion();

        }
    }

} );