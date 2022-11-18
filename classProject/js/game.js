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
	playerWord(letterCount);

	var playOneRandWord = theWords.playerOneWord; //'end' //theWords.playerOneWord
	var playerOne = new Player(playOneName, playOneRandWord);
	await drawPlayerBoard(playerOne, 'one');
	currentRow = await document.getElementById('one1');
	currentBox = await currentRow.firstElementChild;
	await console.log(currentBox);

	// var playTwoRandWord = theWords.playerTwoWord; //'dog' //theWords.playerTwoWord
	// var playerTwo = new Player(playTwoName, playTwoRandWord);
	// console.log("Player Two instance created", playerTwo);
	// drawPlayerBoard(playerTwo, "two");
	// Rounds
	// if (playerOne.turns == 6) {
	//     // talk to board id=one
	//     // document.getElementById('one1').firstChild.innerHTML=key
	//     alert("Player One's turn")
	//     alert("Player One please enter your guess")
	//     console.log('player object check', playerOne.turns)
	//     console.log('player guess check as keys are pressed', playerOne.guess.length)
	//     var r = round(playerOne)
	//     if (r) {
	//         round(playerOne)
	//     } else {
	//         r = round(playerTwo)
	//         if (r) {
	//             round(playerTwo)
	//         } else {
	//             console.log("both players guessed")
	//         }
	//     }
	// }
	// playing = false
}
// playGame()
