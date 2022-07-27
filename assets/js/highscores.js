const highScoresListEl = document.querySelector( '#high-scores' );
const highScoresMainEl = document.querySelector( '#high-scores-main' );
const clearButton = document.querySelector( '#clear' );
const highScores = JSON.parse( localStorage.getItem( 'highScores' ) ) || [];

const displayHighScores = () => {
    
    for ( const highScore of highScores ) {

        const listItemEl = document.createElement( 'li' );
        listItemEl.textContent = `${ highScore.initials } - ${ highScore.score }`;
        highScoresListEl.appendChild( listItemEl );
    }
}

clearButton.addEventListener( 'click', () => {

    localStorage.removeItem( 'highScores' );

    location.reload();
    
} );

// if there are high scores render them to screen
highScores.length ? displayHighScores() : highScoresMainEl.innerHTML = "<h2>No High Scores Saved</h2>";