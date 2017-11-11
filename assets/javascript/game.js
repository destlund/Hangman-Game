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
]
var lettersGuessed = [""]
var points = 0
var blankWord = []
var alreadyGuessed = []


// let's get started

function gameStart() {

    // choose one word at random from the list

    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
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
        console.log(isLetter);
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

        } //end it's not
        else {
            console.log(userGuess + " is not in the word")
            // remove one point from guesses remaining
            guessesRemaining--;
            alreadyGuessed.push(userGuess);
            $('#letters-guessed').text(alreadyGuessed.join(', '));
            $('#guesses-remaining').text(guessesRemaining);
        }

        // loss condition
        if (guessesRemaining == 0) {
            $('#letters-guessed').text('')
            $('#welcome').text("You got facehugged!");
            gameStart();
        }

        // victory condition
        if (word == blankWord.join('')) {
            points++
            $('#guesses-remaining').text(guessesRemaining);
            $('#score').text(points);
            $('#welcome').text("Great work! Here's another word.");
            gameStart()
        }


        // make sure it's a letter with elseif - currently broken
        // else if (letters.includes(userGuess)) {
        // console.log(userGuess + " is not in the word")
        // // remove one point from guesses remaining
        // guessesRemaining-- 
        // }
        // that's no letter -would prefer an elseif to make else not a letter at all


        // print it all on the page

    } // end keypress event

} // end game start function



// now run the whole thing in a for loop ten times and then victory!

gameStart()

// for (; points < 10) {
//  gameStart
// }