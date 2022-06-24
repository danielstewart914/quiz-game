var questions = [
{
    question: 'JavaScript is a _____-side programming language.',
    answers: [ 'Client', 'Server', 'Both', 'None' ],
    correctAnswer: 'Both',
    canShuffle: false
},
{
    question: 'Which of the following will write "Hello World" in an alert box?',
    answers: [ 'alertBox(“Hello World!”);', 'alert(“Hello World!”);', 'msgAlert(“Hello World!”);', 'alert(Hello World!);' ],
    correctAnswer: 'alert(“Hello World!”);',
    canShuffle: true
},
{
    question: 'Which method would you use to find the minimum of x and y using JavaScript?',
    answers: [ 'Math.min(x,y)', 'min(x,y)', 'min(xy)', 'Math.min(xy)' ],
    correctAnswer: 'Math.min(x,y)',
    canShuffle: true
},
{
    question: 'Which "if" statement is correct to execute if "x" is equal to 2?',
    answers: [ 'if(x 2)', ' if(x = 2)', 'if(x != 2 )', 'if(x === 2)' ],
    correctAnswer: 'if(x === 2)',
    canShuffle: true
},
{
    question: 'JavaScript has a file extension of:',
    answers: [ '.java', '.js', '.javascript', '.xml' ],
    correctAnswer: '.js',
    canShuffle: true
},
{
    question: 'Which of these is a valid variable name in JavaScript?',
    answers: [ '_data', 'numbers&letters', 'let', ' 7days' ],
    correctAnswer: '_data',
    canShuffle: true
},
{
    question: 'Which symbol is used separate JavaScript statements?',
    answers: [ '\, ( Comma )', '\: ( Colon )', '\- ( Hyphen )', '\; ( Semicolon )' ],
    correctAnswer: '\; ( Semicolon )',
    canShuffle: true
},
{
    question: 'Which JavaScript keyword is used to declare a variable?',
    answers: [ 'Var', 'var', 'Let', 'All of the above' ],
    correctAnswer: 'var',
    canShuffle: true
},
{
    question: 'How many keywords are there in JavaScript to declare variables or constants?',
    answers: [ '1', '2', '3', '4' ],
    correctAnswer: '3',
    canShuffle: true
},
{
    question: 'What is the default value of an uninitialized variable?',
    answers: [ '0', 'undefined', 'null', 'NaN' ],
    correctAnswer: 'undefined',
    canShuffle: true
},
{
    question: 'Which of the following represent falsy values in javascript?',
    answers: [ 'false', '\"\"', 'undefined', 'All of the above' ],
    correctAnswer: 'All of the above',
    canShuffle: false
},
{
    question: 'Which of the following represent truthy values in javascript?',
    answers: [ 'true', '{}', '[]', 'All of the above' ],
    correctAnswer: 'All of the above',
    canShuffle: false
},
{
    question: `What type of variable is declared by the following?
                <div class="snippet"><span class="blue">var </span>
                <span class="light-blue">data</span>
                <span class="yellow">[]</span>;
                </div>`,
    answers: [ 'array', 'object', 'data', 'number' ],
    correctAnswer: 'array',
    canShuffle: true
},
{
    question: 'Which method is used to insert a new element at the end of an array?',
    answers: [ 'unshift()', 'push()', 'pop()', 'insert()' ],
    correctAnswer: 'push()',
    canShuffle: true
},
{
    question: 'Which of the following types of variable are only visible within a function where it is declared?',
    answers: [ 'global variable', 'local variable', 'Both of the above', 'None of the Above' ],
    correctAnswer: 'local variable',
    canShuffle: false
}, 
{
    question: `What will the output of the following code be?
                <div class="snippet">
                    <span class="light-blue">console</span>.<span class="pale-yellow">log</span><span class="yellow">(</span>
                    <span class="blue">typeof</span>
                    <span class="purple">(</span>
                    <span class="orange">'1'</span>
                    +
                    <span class= pale-green>2</span>
                    <span class="purple">)</span>
                    <span class="yellow">)</span>;
                </div>`,
    answers: [ '\'boolean\'', '\'string\'', '\'number\'', '\'false\'' ],
    correctAnswer: '\'string\'',
    canShuffle: true
},
{
    question: 'Which of the following array methods removes the first element of the array and returns that element?',
    answers: [ 'reverse()', 'shift()', 'slice()', 'some()' ],
    correctAnswer: 'shift()',
    canShuffle: true
},
{
    question: `What will the output of the following code be?
            <div class="snippet">
                <span class="light-blue">console</span>.<span class="pale-yellow">log</span><span class="yellow">(</span>
                <span class="blue">typeof</span>
                <span class="purple">(</span>
                <span class="pale-green">6</span>
                /
                <span class="orange">'3'</span>
                <span class="purple">)</span>
                <span class="yellow">)</span>;
            </div>`,
    answers: [ '\'string\'', '\'number\'', '\.integer\'', 'undefined' ],
    correctAnswer: '\'number\'',
    canShuffle: true
},
{
    question: `What will the output of the following code be?
            <div class="snippet">
                <span class="blue">let</span>
                <span class="light-blue">stringVar</span>
                =
                <span class="orange">'Hello World!'</span>;<br />
                <span class="light-blue">console</span>.<span class="pale-yellow">log</span><span class="yellow">(</span>
                <span class="light-blue">stringVar</span>.<span class="pale-yellow">charAt</span><span class="purple">(</span>
                <span class="pale-green">5</span>
                <span class="purple">)</span>
                <span class="yellow">)</span>;
            </div>`,
    answers: [ 'l', 'W', 'o', 'H' ],
    correctAnswer: 'o',
    canShuffle: true
},
{
    question: 'Which of the following represents loops in javascript?',
    answers: [ 'for', 'while', 'forEach', 'All of the above' ],
    correctAnswer: 'All of the above',
    canShuffle: false
},
{
    question: 'An object is an unordered collection of _______.',
    answers: [ 'values', 'names', 'Properties', 'All of the above' ],
    correctAnswer: 'Properties',
    canShuffle: false
},
{
    question: 'Which method of an Array object calls a function for each element in the array?',
    answers: [ 'forEach()', 'every()', 'forEvery()', 'each()' ],
    correctAnswer: 'forEach()',
    canShuffle: true
},
{
    question: 'What is the correct way to write comments in JavaScript?',
    answers: [ '{# ... #}', '(! ... )', '// ....', '\\\\ ...' ],
    correctAnswer: '// ....',
    canShuffle: true
},
{
    question: 'What company originally developed JavaScript?',
    answers: [ 'IBM', 'Microsoft', 'Google', 'Netscape' ],
    correctAnswer: 'Netscape',
    canShuffle: true
},
{
    question: 'How do you call a function called myFunction() ?',
    answers: [ 'myFunction();', 'call myFunction();', 'call function myFunction();', 'myFunction;' ],
    correctAnswer: 'myFunction();',
    canShuffle: true
}

];

var questionObjectTemplate = 
{
    question: '',
    answers: [ '', '', '', '' ],
    correctAnswer: '',
    canShuffle: false
};