// const {playerWord, correctGuess, rounds} = require('./logic');
// const {Player} = require('./class/player')

// Defaults Global
let letterCount = '3';
let playOneName = 'Jane';
let playing = true;
let runCount = 0;
let currentRow;
let currentBox;
// let playTwoName = "Bill";

async function playGame(e) {
	e.preventDefault();
	setUpGame();
	// playerWord(letterCount);

	var playerOne = new Player(playOneName);
	playerOne.setRandomWord(letterCount);
	await drawPlayerBoard(playerOne, 'one');
	currentRow = await document.getElementById('one1');
	currentBox = await currentRow.firstElementChild;
	await console.log(currentBox);
}
