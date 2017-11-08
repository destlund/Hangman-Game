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



// let's get started

function gameStart() {

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

// on keystroke, check whether the letter is in word

     	document.onkeyup = function(event) {
		var userGuess = event.key.toLowerCase();
		var isLetter = "" ;
		console.log(isLetter) ;
		$('#welcome').text("Here we go!");

// it's there
		if (word.includes(userGuess)) {
			console.log(userGuess + " is in the word");
			// add one to lettersGuessed and display it in the blanks, add one to score

// find the guess in Word and change blankword to userguess where appropriate
			for (i = 0; i < word.length; i++) {
				if (userGuess == word[i]) {
					blankWord[i] = userGuess
				}
			}

// victory conditions
			if (word==blankWord.join('')) {
				points++
				gameStart()
			}

			else {}

		} //end it's there

// make sure it's a letter with elseif - currently broken
		// else if (letters.includes(userGuess)) {
			// console.log(userGuess + " is not in the word")
			// // remove one point from guesses remaining
			// guessesRemaining-- 
		// }
// that's no letter -would prefer an elseif to make else not a letter at all

//it's not there
		else {
			console.log("not a letter")
			console.log(userGuess + " is not in the word")
			// remove one point from guesses remaining
			guessesRemaining-- 
			console.log(guessesRemaining + "guesses remaining")
			alreadyGuessed.push(userGuess)
		} // end it's not there

// print it all on the page
			 $('#word-blanks').html(blankWord);
			 $('#guesses-remaining').text(guessesRemaining);
			 $('#score').text(points);
			 $('#letters-guessed').text(alreadyGuessed);
console.log(blankWord)
console.log(blankWord.join(''))

			
		
		} // end keypress event
		
} // end game start function

// now run the whole thing in a for loop ten times and then victory!

gameStart()
	// for (; points < 10) {
	// 	gameStart
	// }
