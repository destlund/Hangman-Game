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
var guessesRemaining = 10
var userGuess = ""



// let's get started

// function gameStart() {

    // choose one word at random from the list

    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    var letters = (/^[a-z]+$/)
    var blankWord = []
    var alreadyGuessed = []

    // make a version of the word where every letter is a blank
    // function makeBlanks() { // why is this a function?
    var blank = "__&nbsp;";
    for (var i = 0; i < word.length; i++) {
        blankWord.push(blank);
    }
    // return blankWord;
    console.log(blankWord);
    // }


    // display the blanks where class is word-blanks

    $('#word-blanks').html(blankWord);



// } // end game start function


    // on keystroke, check whether the letter is in word
    document.onkeyup = function(event) {
        var userGuess = event.key.toLowerCase();

        $('#welcome').text("Here we go!");


        // make sure it's a letter with elseif - currently broken
        // else if (letters.includes(userGuess)) {
        // console.log(userGuess + " is not in the word")
        // // remove one point from guesses remaining
        // guessesRemaining-- 
        // }
        // that's no letter -would prefer an elseif to make else not a letter at all



        // print it all on the page
        $('#word-blanks').html(blankWord);
        $('#guesses-remaining').text(guessesRemaining);
        $('#score').text(points);
        $('#letters-guessed').text(alreadyGuessed);
    } // end keypress event


// function gametest() {
        // it's there
        if (word.includes(userGuess)) {
            console.log(userGuess + " is in the word");
            // add one to lettersGuessed and display it in the blanks, add one to score

            // find the guess in Word and change blankword to userguess where appropriate
            for (i = 0; i < word.length; i++) {
                if (userGuess == word[i]) {
                    blankWord[i] = userGuess
                }
            } //end it's there


        
        // score conditions
        if (word == blankWord.join('')) {
            points++            
        } //end victory
                //it's not there
        else {
            console.log("not a letter")
            console.log(userGuess + " is not in the word")
            // remove one point from guesses remaining
            guessesRemaining--
            console.log(guessesRemaining + "guesses remaining")
            alreadyGuessed.push(userGuess)
        } // end it's not there
}

 //    if ( points = 10 ) {
	// 	$(".jumbotron").text("<h1>You win! Press any key to continue</h1>")
	// 	document.onkeyup = function(restart) {
	// 		gamestart()
	// 	}
	// }

