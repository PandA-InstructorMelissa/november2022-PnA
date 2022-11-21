// const {playerWord, correctGuess, rounds} = require('./logic');
// const {Player} = require('./class/player')

// Defaults Global
let letterCount = '3';
let playOneName = 'Jane';
let playing = true;
let runCount = 0;

// let playTwoName = "Bill";

function playGame(e) {
	e.preventDefault();
	setUpGame();
	// playerWord(letterCount);

	var playerOne = new Player(playOneName, letterCount);
	// playerOne.setRandomWord(letterCount);
	drawPlayerBoard(playerOne, 'one');
}
