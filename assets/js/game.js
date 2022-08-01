let questions = [];

fetch( './assets/js/questions.json' ).then( response => response.json() ).then( responseJSON => questions = responseJSON );

// variables for DOM elements
// main content
const titleEl = document.querySelector( '#title' );

const gameBoxEl = document.querySelector( '#game-container' );

// Welcome screen
const welcomeScreenEl = document.querySelector( '#welcome-screen' );

// game questions will be displayed here
const questionBoxEl = document.querySelector( '#question-box' );

// end screen will be displayed here
const endScreenEl = document.querySelector( '#end-screen' );

// correct/wrong will be displayed here
const responseBoxEl = document.querySelector( '#response-box' );

// High Score submission thank you will be displayed here
const highScoreSubmissionEl = document.querySelector( '#high-score-submission' );

// high score submission form
const highScoreFormEl = document.querySelector( '#high-score-form' );

// score will be displayed here
const scoreEl = document.querySelector( '#score-box' ); 

// timer will be displayed here
const timerEl = document.querySelector( '#timer' );

// high score submission button
const submitHighScoreButton = document.querySelector( '#submit-high-score' );


// other global variables
const highScores = JSON.parse( localStorage.getItem( 'highScores' ) ) || [];
let questionPointer;
let currentQuestion;
let timerInterval;
let countdown;
let score = 0;

const oneSecond = 1000;
const fiftyMilliseconds = 50;

// shuffles the elements in an array using Fisher–Yates Shuffle
// I used the algorithm at the bottom of this article https://bost.ocks.org/mike/shuffle/
const shuffleArray = ( array ) => {

    let length = array.length;
    let element1;
    let element2;

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
const startTimer = () => {
    
    timerInterval = setInterval( () => {

        countdown--;

        // if countdown is 10 or below start pulsing the timer
        if ( countdown === 10 ) {

            timerEl.classList.add( 'low' );

        }

        timerEl.textContent = countdown;

        // if timer runs out clear question box amd print end screen
        if ( countdown <= 0 ) {
            clearInterval( timerInterval );

            countdown = 0;

            timerEl.classList.remove( 'low' );

            questionBoxEl.classList.add( 'hide' );

            displayEndScreen();
        }

    }, oneSecond );
}

// starts game running
const startGame = () => {

    // hide everything except the question box
    titleEl.classList.add( 'hide' );
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
    countdown = 90;
    score = 0;

    // print first question
    printQuestion();

    // start game timer
    startTimer();

}

// prints new question on screen
const printQuestion = () => {

    // if current questions answers can be shuffled
    if ( currentQuestion.canShuffle ) {

        // shuffle answers order
        shuffleArray( currentQuestion.answers );

    }

    // display updated score
     scoreEl.textContent = 'Score: ' + score;

    // display question in h2 header and create 4 buttons from the current question object
    questionBoxEl.innerHTML =  `

        <h4> Question: ${ questionPointer + 1 } of ${ questions.length }</h4>
        <h2>${ currentQuestion.question }</h2>
        <button data-answer="${ currentQuestion.answers[0] }" class="answer button">${ currentQuestion.answers[0] }</button>
        <button data-answer="${ currentQuestion.answers[1] }" class="answer button">${ currentQuestion.answers[1] }</button>
        <button data-answer="${ currentQuestion.answers[2] }" class="answer button">${ currentQuestion.answers[2] }</button>
        <button data-answer="${ currentQuestion.answers[3] }" class="answer button">${ currentQuestion.answers[3] }</button>
    `;
}

// checks if clicked answer is the correct answer
const checkAnswer = ( event ) => {

    const clickedAnswer = event.target.dataset.answer;

    // if clicked answer is correct
    if ( clickedAnswer === currentQuestion.correctAnswer ) {

        responseBoxEl.textContent = 'Correct!';
        responseBoxEl.classList.add( 'correct' );
        score++;

    // answer is wrong 
    } else {

        responseBoxEl.textContent = 'Wrong!';
        responseBoxEl.classList.add( 'wrong' );
        countdown -= 5;          

        timerEl.classList.add( 'subtract' );

        // if decrementing count results in negative number set to 0
        if ( countdown < 0 ) {

            countdown = 0;

        }  

        timerEl.textContent = countdown;

    }

}

// check if current score is a high score
const checkIfHighScore = () => {

    // if there are 10 high scores AND score is greater than the lowest score in high scores
    if (  highScores.length < 10 && score || highScores.length === 10 && score > highScores[9].score ) {
    
        return true;

    } else {

        return false;
        
    }
}

// displays end screen and high score submission form
const displayEndScreen = () => {
    
    // pulse timer and score
    timerEl.classList.add( 'pulse' );
    scoreEl.classList.add( 'pulse' );

    timerEl.textContent = countdown;

    // transfer remaining time to score
    const addTimerToScore = setInterval( () => {

        // if countdown has finished being added to score
        if ( countdown <= 0 ) {
        
            clearInterval( addTimerToScore );

            // reveal end screen
            endScreenEl.classList.remove( 'hide' );

            scoreEl.textContent = 'Final Score: ' + score;

            // if current score is a high score display high score entry
            if ( checkIfHighScore() ) {

                highScoreFormEl.classList.remove( 'hide' );

            // else display try again message
            } else {

                highScoreSubmissionEl.classList.remove( 'hide' );
                highScoreSubmissionEl.innerHTML = `
                    <h3>Sorry your score did not make it into the Top 10</h3>
                    Please try again.
                `;

            }

        // else add countdown to score
        } else {

            countdown--;
            score++;

            timerEl.textContent = countdown;
            scoreEl.textContent = 'Score: ' + score;

        }

    }, fiftyMilliseconds );
}

// saves high score to local storage
const saveHighScore = ( event ) => {

    event.preventDefault();
    event.stopPropagation();

    //get initials from form
    let enteredInitials = document.querySelector( '#initials' ).value;

    // if no initials are entered set initials to 'MVP'
    if ( !enteredInitials ) {

        enteredInitials = 'MVP';
    }

    // create new high score object
    const thisHighScore = {

        initials: enteredInitials.toUpperCase(),
        score: score

    };

    //  push new high score to the end of the array
    highScores.push( thisHighScore );

    // sort high score array by score before saving to local storage
    highScores.sort( ( a, b ) => {

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
gameBoxEl.addEventListener( 'click', ( event ) => {

    // if the start button is clicked start game
    if (  event.target.classList.contains( 'start' ) ) {

        startGame();

    }

    // if an answer button is clicked check against the correct answer
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

    // if back button is clicked reload page
    if ( event.target.classList.contains( 'back' ) ) {

        location.reload();

    }
} );

// listen for high score button click
submitHighScoreButton.addEventListener( 'click', saveHighScore );

// remove animation classes when animation ends
responseBoxEl.addEventListener( 'animationend', () => {

    responseBoxEl.classList.remove( 'wrong' );
    responseBoxEl.classList.remove( 'correct' );
    responseBoxEl.textContent = '';

} );

// remove animation classes when animation ends
timerEl.addEventListener( 'animationend', ( event ) => {

    if ( event.animationName === 'redFlash' ) {

        timerEl.classList.remove( 'subtract' );

    }

    if ( event.animationName === 'pulse' ) {
        timerEl.classList.remove( 'pulse' );
        scoreEl.classList.remove( 'pulse' );
    }

} );