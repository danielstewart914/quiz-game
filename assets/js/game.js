// variables for DOM elements
// main content
var gameBoxEl = document.querySelector( '#game-container' );

// Welcome screen
var welcomeScreenEl = document.querySelector( '#welcome-screen' );

// game questions will be displayed here
var questionBoxEl = document.querySelector( '#question-box' );

//end screen will be displayed here
var endScreenEl = document.querySelector( '#end-screen' );

// correct/wrong will be displayed here
var responseBoxEl = document.querySelector( '#response-box' );

// High Score submission thank you will be displayed here
var highScoreSubmissionEl = document.querySelector( '#high-score-submission' );

// high score submission form
var highScoreFormEl = document.querySelector( '#high-score-form' );

// score will be displayed here
var scoreEl = document.querySelector( '#score-box' ); 

// timer will be displayed here
var timerEl = document.querySelector( '#timer' );

// high score submission button
var submitHighScoreButton = document.querySelector( '#submit-high-score' );

// other global variables
var highScores = JSON.parse( localStorage.getItem( 'highScores' ) );
var questionPointer;
var currentQuestion;
var timerInterval;
var countdown;
var score = 0;

const oneSecond = 1000;
    
// var testHighScores = [ 
//     { initials: "DBG", score: 45 }, 
//     { initials: "MVP", score: 37 }, 
//     { initials: "LAS", score: 33 },
//     { initials: "AKG", score: 30 },
//     { initials: "CSG", score: 28 },
//     { initials: "MVP", score: 27 },
//     { initials: "DBG", score: 24 },
//     { initials: "DBG", score: 20 },
//     { initials: "MDS", score: 18 },
//     { initials: "ADS", score: 10 }
// ];

// highScores = testHighScores;

// shuffles the elements in an array using Fisher–Yates Shuffle
// I used the algorithm at the bottom of this article https://bost.ocks.org/mike/shuffle/
function shuffleArray( array ) {

    var length = array.length;
    var element1;
    var element2;

    // while there are elements left
    while ( length ) {

        //pick a remaining element
        element1 = Math.floor( Math.random() * length-- );
        
        // swap element with current element
        element2 = array[ length ];
        array[ length ] = array [ element1 ];
        array[ element1 ] = element2;

    }

    return array;

}

// starts game timer
function startTimer () {
    
    timerInterval = setInterval( function () {

        countdown--;

        // if countdown is 10 or below start pulsing the timer
        if ( countdown <= 10 ) {

            timerEl.innerHTML = `<span class="low">${ countdown }</span>`;

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

// starts game running
function startGame () {

    // hide everything except the question box
    welcomeScreenEl.classList.add( 'hide' );
    endScreenEl.classList.add( 'hide' );
    highScoreFormEl.classList.add( 'hide' );
    highScoreSubmissionEl.classList.add( 'hide' );

    // reveal question box
    questionBoxEl.classList.remove( 'hide' );

    // shuffle questions so they don't appear in the same order every time the game is played
    shuffleArray( questions );

    // set pointer to first question
    questionPointer = 0;

    // set initial value of question
    currentQuestion = questions[questionPointer];

    // set countdown and timer to initial values
    countdown = 30;
    score = 0;

    // print first question
    printQuestion();

    // start game timer
    startTimer();

}

// prints new question on screen
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

// checks if clicked answer is the correct answer
function checkAnswer ( event ) {

    var clickedAnswer = event.target.dataset.answer;

    // if clicked answer is correct
    if ( clickedAnswer === currentQuestion.correctAnswer ) {

        responseBoxEl.innerHTML = '<span class="correct">Correct!</span>';
        score++;

    // answer is wrong 
    } else {

        responseBoxEl.innerHTML = '<span class="wrong">Wrong!</span>';
        countdown -= 5;

        // if decrementing count results in negative number set to 0
        if ( countdown < 0 ) {

            countdown = 0;

        }            

        timerEl.innerHTML = `<span class="subtract">${ countdown }</span>`;

    }

}

// check if current score is a high score
function checkIfHighScore () {

    if ( highScores ) {

        if (  highScores.length < 10 || highScores.length === 10 && score > highScores[9].score ) {
        
            return true;
    
        } else {

            return false;
            
        }

    } else {

        return true;

    }

}

// displays end screen and high score submission form
function displayEndScreen () {
    
    // pulse timer and score
    timerEl.innerHTML = `<span class="pulse">${ countdown }</span>`;
    scoreEl.innerHTML = `<span class="pulse">Score: ${ score }</span>`;

    // transfer remaining time to score
    var addTimerToScore = setInterval( function () {

        // if countdown has finished being added to score
        if ( countdown <= 0 ) {
        
            clearInterval( addTimerToScore );

            // reveal end screen
            endScreenEl.classList.remove( 'hide' );

            // if current score is a high score display high score entry
            if ( checkIfHighScore() ) {

                highScoreFormEl.classList.remove( 'hide' );

            // else display try again message
            } else {

                highScoreSubmissionEl.classList.remove( 'hide' );
                highScoreSubmissionEl.innerHTML = `
                    <h3>Your score did not meet the Top 10</h3>
                    Please try again.
                `;

            }

        // else add countdown to score
        } else {

            countdown--;
            score++;

            timerEl.children[0].textContent = countdown;
            scoreEl.children[0].textContent = 'Score: ' + score;

        }

    }, 50 );
}


// saves high score to local storage
function saveHighScore ( event ) {

    event.preventDefault();
    event.stopPropagation();

    //get initials from form
    var enteredInitials = document.querySelector( '#initials' ).value;

    // if no initials are entered make initials 'MVP'
    if ( !enteredInitials ) {

        enteredInitials = 'MVP';
    }

    // create new high score object
    var thisHighScore = {

        initials: enteredInitials.toUpperCase(),
        score: score

    };

    // if no high scores are saved start new array with high score object as first item
    // otherwise push new high score to the end of the array
    if ( !highScores ) {

        highScores = [ thisHighScore ];

    } else {

        highScores.push( thisHighScore );

    }

    // sort high score array by score before saving to local storage
    highScores.sort( function ( a, b ) {

        return b.score - a.score;

    } );

    // if there are more than 10 high scores remove lowest score 
    if ( highScores.length > 10 ) {

        highScores.pop();

    }

    // save high scores to localStorage 
     localStorage.setItem( 'highScores', JSON.stringify( highScores ) );

    // display thank you and high score submission
    highScoreSubmissionEl.classList.remove( 'hide' );

    highScoreSubmissionEl.innerHTML = `
        <h3>${ thisHighScore.initials } - ${ thisHighScore.score }</h3>
        Thank you. Your high score has been saved.
    `;

    // hide submission form
    highScoreFormEl.classList.add( 'hide' );

}

// listen for click events in main content box
gameBoxEl.addEventListener( 'click', function ( event ) {

    // if the start button is clicked start game
    if (  event.target.classList.contains( 'start' ) ) {

        startGame();

    }

    // if you an answer button is clicked check against the correct answer
    if (  event.target.classList.contains( 'answer' ) ) {

        checkAnswer( event );

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

    if ( event.target.classList.contains( 'back' ) ) {

        location.reload();

    }
} );

// listen for high score button click
submitHighScoreButton.addEventListener( 'click', saveHighScore );