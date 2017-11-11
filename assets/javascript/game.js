// this is our list of words
var words = [
    "xenomorph",
    "facehugger",
    "ripley",
    "nostromo",
    "weyland",
    "chestburster",
    "synthetic",
    "flamethrower",
    "pilot",
    "queen",
    "egg",
    "cat",
    "jones"
]
var lettersGuessed = [""]
var points = 0
var blankWord = []
var alreadyGuessed = []
var wordsGuessed = ['']


// let's get started

function gameStart() {

    // choose one word at random from the list
    // that hasn't already been
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    // the console helps me cheat.
    var letters = (/^[a-z]+$/)
    var blankWord = []
    var alreadyGuessed = []
    var guessesRemaining = 10


    // make a version of the word where every letter is a blank
    // function makeBlanks() { // why is this a function?
    var blank = "__&nbsp;";
    for (var i = 0; i < word.length; i++) {
        blankWord.push(blank);
    }


    // display the blanks where class is word-blanks

    $('#word-blanks').html(blankWord);

    // on keystroke, check whether the letter is in word

    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();
        var isLetter = "";
        $('#welcome').text("Here we go!");

        // it's there
        if (word.includes(userGuess)) {

            // at least get rid of 'you haven't guessed anything'
            $('#letters-guessed').text(alreadyGuessed.join(', '));
            // find the guess in Word and change blankword to userguess where appropriate
            for (i = 0; i < word.length; i++) {
                if (userGuess == word[i]) {
                    blankWord[i] = userGuess;
                }
            }
            $('#word-blanks').html(blankWord);
            $('#guesses-remaining').text(guessesRemaining);
            $('#score').text(points);
        } //end it's there


        // it's not and has already been guessed
        else if (alreadyGuessed.includes(userGuess)) {

        } //end it's not and already guessed

        // it's not but it's new
        else {
            guessesRemaining--;
            alreadyGuessed.push(userGuess);
            $('#letters-guessed').text(alreadyGuessed.join(', '));
            $('#guesses-remaining').text(guessesRemaining);
        } //end it's not but it's  new

        // loss condition
        if (guessesRemaining == 0) {
            $('#letters-guessed').text('')
            $('#welcome').text("You got facehugged!");
            gameStart();
        }

        // victory condition
        if (word == blankWord.join('')) {
            points++
            wordsGuessed.push(word);
            console.log(wordsGuessed);
            $('#guesses-remaining').text(guessesRemaining);
            $('#score').text(points);
            $('#welcome').text("Great work! Here's another word.");
            gameStart()
        }

    } // end keypress event

} // end game start function


gameStart()