var questions = [
{
    question: 'JavaScript is a _____-side programming language.',
    answers: [ 'Client', 'Server', 'Both', 'None' ],
    correctAnswer: 'Both'
},

{
    question: 'Which of the following will write "Hello World" in an alert box?',
    answers: [ 'alertBox(“Hello World!”);', 'alert(“Hello World!”);', 'msgAlert(“Hello World!”);', 'alert(Hello World!);' ],
    correctAnswer: 'alert(“Hello World!”);'
},

{
    question: 'Which method would you use to find the minimum of x and y using JavaScript?',
    answers: [ 'Math.min(x,y)', 'min(x,y)', 'min(xy)', 'Math.min(xy)' ],
    correctAnswer: 'Math.min(x,y)'
},

{
    question: 'Which "if" statement is correct to execute if "x" is equal to 2?',
    answers: [ 'if(x 2)', ' if(x = 2)', 'if(x != 2 )', 'if(x === 2)' ],
    correctAnswer: 'if(x === 2)'
},

{
    question: 'JavaScript has a file extension of:',
    answers: [ '.java', '.js', '.javascript', '.xml' ],
    correctAnswer: '.js'
},

{
    question: 'Which of the following is true about variable naming conventions in JavaScript?',
    answers: [ 'Variables must begin with a letter or underscore', 'Variable names are case sensitive', 'Both of the above', ' None of the above' ],
    correctAnswer: 'Both of the above'
},

{
    question: 'Which symbol is used separate JavaScript statements?',
    answers: [ '\, ( Comma )', '\: ( Colon )', '\- ( Hyphen )', '\; ( Semicolon )' ],
    correctAnswer: '\; ( Semicolon )'
},

{
    question: 'Which JavaScript keyword is used to declare a variable?',
    answers: [ 'Var', 'var', 'Let', 'All of the above' ],
    correctAnswer: 'var'
},

{
    question: 'How many keywords are there in JavaScript to declare variables or constants?',
    answers: [ '1', '2', '3', '4' ],
    correctAnswer: '3'
},

{
    question: 'What is the default value of an uninitialized variable?',
    answers: [ '0', 'undefined', 'null', 'NaN' ],
    correctAnswer: 'undefined'
},
{
    question: 'Which of the following represent falsy values in javascript?',
    answers: [ 'false', '\"\"', 'undefined', 'All of the above' ],
    correctAnswer: 'All of the above'
},
{
    question: 'Which of the following represent truthy values in javascript?',
    answers: [ 'true', '{}', '[]', 'All of the above' ],
    correctAnswer: 'All of the above'
},
{
    question: `What type of variable is declared by the following?
                <div class="snippet"><span class="blue">var </span>
                <span class="light-blue">data</span>
                <span class="yellow">[]</span>;
                </div>`,
    answers: [ 'array', 'object', 'string', 'None of the above' ],
    correctAnswer: 'array'
},
{
    question: 'Which method is used to insert a new element at the end of an array?',
    answers: [ 'unshift()', 'push()', 'pop()', 'None of the above' ],
    correctAnswer: 'push()'
},
{
    question: 'Which of the following types of variable are only visible within a function where it is declared?',
    answers: [ 'global variable', 'local variable', 'Both of the above', 'None of the Above' ],
    correctAnswer: 'local variable'
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
    answers: [ '\'boolean\'', '\'string\'', '\'number\'', 'None of the above' ],
    correctAnswer: '\'string\''
},
{
    question: 'Which of the following array methods removes the first element of the array and returns that element?',
    answers: [ 'reverse()', 'shift()', 'slice()', 'some()' ],
    correctAnswer: 'shift()'
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
    answers: [ '\'string\'', '\'number\'', '\.integer\'', 'None of the above' ],
    correctAnswer: '\'number\''
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
    correctAnswer: 'o'
},
{
    question: 'Which of the following represents loops in javascript?',
    answers: [ 'for', 'while', 'forEach', 'All of the above' ],
    correctAnswer: 'All of the above'
},
{
    question: 'An object is an unordered collection of _______.',
    answers: [ 'values', 'names', 'Properties', 'All of the above' ],
    correctAnswer: 'Properties'
}

];

var questionObjectTemplate = 
{
    question: '',
    answers: [ '', '', '', '' ],
    correctAnswer: ''
};