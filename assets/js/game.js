// variables for DOM elements
var gameBoxEl = document.querySelector( '#game-container' );
var welcomeScreenEl = document.querySelector( '#welcome-screen' );
var questionBoxEl = document.querySelector( '#question-box' );
var endScreenEl = document.querySelector( '#end-screen' );
var responseBoxEl = document.querySelector( '#response-box' );
var submitButtonEl = document.querySelector( '#submit-high-score' );
var highScoreResponseEl = document.querySelector( '#high-score-display' );
var scoreEl = document.querySelector( '#score-box' );
var timerEl = document.querySelector( '#timer' );

// other global variables
var highsScores = JSON.parse( localStorage.getItem( 'highScores' ) );
var questionPointer;
var currentQuestion;
var timerInterval;
var countdown;
var score = 0;

const oneSecond = 1000;

function startTimer () {
    
    timerInterval = setInterval( function () {

        countdown--;

        // if countdown is 10 or below start pulsing the timer
        if ( countdown <= 10 ) {

            timerEl.innerHTML = `<span class="low">${countdown}</span>`;

        } else {

            timerEl.innerHTML = countdown;

        }

        // if timer runs out clear question box amd print end screen
        if ( countdown <= 0 ) {
            clearInterval( timerInterval );

            countdown = 0;

            questionBoxEl.classList.add( 'hide' );

            displayEndScreen();
        }

    }, oneSecond );
}

function printQuestion () {

    // display question in h2 header and create 4 buttons from the current question object
    questionBoxEl.innerHTML =  `
        <h2>${currentQuestion.question}</h2>
        <button data-answer="${currentQuestion.answers[0]}" class="answer button">${currentQuestion.answers[0]}</button>
        <button data-answer="${currentQuestion.answers[1]}" class="answer button">${currentQuestion.answers[1]}</button>
        <button data-answer="${currentQuestion.answers[2]}" class="answer button">${currentQuestion.answers[2]}</button>
        <button data-answer="${currentQuestion.answers[3]}" class="answer button">${currentQuestion.answers[3]}</button>
    `;

    // display updated score
    scoreEl.innerHTML = 'Score: ' + score;
}

function displayEndScreen () {

    // pulse timer and score
    timerEl.innerHTML = `<span class="pulse">${countdown}</span>`;
    scoreEl.innerHTML = `<span class="pulse">Score: ${score}</span>`;

    // transfer remaining time to score
    var addTimerToScore = setInterval( function () {

        if ( countdown <= 0 ) {
        
            clearInterval( addTimerToScore );

            // reveal end screen
            endScreenEl.classList.remove( 'hide' );

        } else {

            countdown--;
            score++;

            timerEl.children[0].textContent = countdown;
            scoreEl.children[0].textContent = 'Score: ' + score;

        }

    }, 50 );
}


// listen for click events in main content box
gameBoxEl.addEventListener( 'click', function ( event ) {

    // if the start button is clicked start game
    if (  event.target.classList.contains( 'start' ) ) {

        // clear welcome screen and display questions
        welcomeScreenEl.classList.add( 'hide' );
        endScreenEl.classList.add( 'hide' );
        questionBoxEl.classList.remove( 'hide' );


        // pointer to first question
        questionPointer = 0;

        // set initial value of question
        currentQuestion = questions[questionPointer];

        countdown = 30;

        score = 0;

        // print first question
        printQuestion();
        startTimer();

    }

    // if you an answer button is clicked check against the correct answer
    if (  event.target.classList.contains( 'answer' ) ) {

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

        // if we have reached the end of the question array end game otherwise continue
        if ( questionPointer === questions.length ) {

            // stop timer
            clearInterval( timerInterval );
            
            // hide question box
            questionBoxEl.classList.add( 'hide' );

            // display the end game screen
            displayEndScreen();

        } else {

            // get next question and print it to the screen
            currentQuestion = questions[questionPointer];
            printQuestion();

        }
    }

} );

// listen for high score
submitButtonEl.addEventListener( 'click', function (event) {

    event.preventDefault();
    event.stopPropagation();

    //get initials from form
    var enteredInitials = document.querySelector( '#initials' ).value;

    // if blank make initials 'MVP'
    if ( !enteredInitials ) {

        enteredInitials = 'MVP';
    }

    // if no highscore are entered
    if ( !highsScores ) {
        
        console.log( 'yes' );
    
    }

    var highScore = {
        initials: enteredInitials.toUpperCase(),
        score: score
    };

    // display high thank you and high score submission
    highScoreResponseEl.innerHTML = `
        <h3>${ enteredInitials } - ${ score }</h3>
        Thank you. Your high score has been saved.
    `;

} );