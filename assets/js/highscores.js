var highScoresListEl = document.querySelector( '#high-scores' );
var highScoresMainEl = document.querySelector( '#high-scores-main' );
var clearButton = document.querySelector( '#clear' );
var highScores;

function displayHighScores () {

    highScores = JSON.parse( localStorage.getItem( 'highScores' ) );

    if ( highScores ) {
    
    console.log ( highScores )
    
        for ( var i = 0; i < highScores.length; i++ ) {
    
            var listItemEl = document.createElement( 'li' );
    
            listItemEl.textContent = `${ highScores[i].initials } - ${ highScores[i].score }`;
    
            highScoresListEl.appendChild( listItemEl );
        }
    
    } else {
    
        highScoresMainEl.innerHTML = "<h2>No High Scores Saved</h2>";
    
    }

}

clearButton.addEventListener( 'click', function () {

    localStorage.removeItem( 'highScores' );

    displayHighScores();
    
} );

displayHighScores();