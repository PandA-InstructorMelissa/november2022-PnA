// Global word bank
var wordBank = {
	3: ['cat', 'dog', 'for', 'the', 'our', 'way', 'end', 'css'],
	4: ['hold', 'word', 'bank', 'four', 'work', 'java', 'grey', 'week', 'read', 'game', 'code', 'node', 'html'],
	5: [
		'right',
		'place',
		'color',
		'wrong',
		'apple',
		'guess',
		'beach',
		'board',
		'bored',
		'alive',
		'timer',
		'clock',
		'space',
		'class',
		'react',
		'nodes',
	],
};

// Global builds keyboard?
var letters = {
	a: 'white',
	b: 'white',
	c: 'white',
	d: 'white',
	e: 'white',
	f: 'white',
	g: 'white',
	h: 'white',
	i: 'white',
	j: 'white',
	k: 'white',
	l: 'white',
	m: 'white',
	n: 'white',
	o: 'white',
	p: 'white',
	q: 'white',
	r: 'white',
	s: 'white',
	t: 'white',
	u: 'white',
	v: 'white',
	w: 'white',
	x: 'white',
	y: 'white',
	z: 'white',
};

// Game set up comes from form on html
function setUpGame() {
	letterCount = document.wordChoice.letterCount.value;
	playOneName = document.wordChoice.playerOne.value;
	// playTwoName = document.wordChoice.playerTwo.value
}

// build game board
function drawPlayerBoard(p, num) {
	makePlayerBoard(p, num);
	makePlayerKeyboard(p);
}

// Onclick function
function round(p) {
	if (p.guess.length < p.word.length) {
		console.log('Keep guessing');
		return true;
	} else {
		console.log('change players');
		return false;
	}
}

// Checking player guess
function correctGuess(p) {
	var result = 'Guess Again';
	if (p.guess == p.word) {
		console.log(true);
		return true;
	} else {
		for (var i = 0; i < p.guess.length; i++) {
			if (p.guess.charAt(i) == p.word.charAt(i)) {
				console.log('letter match change to green');
				letters[p.guess.charAt(i)] = 'green';
			} else if (p.word.includes(p.guess.charAt(i))) {
				console.log('letter in word wrong place change yellow');
				letters[p.guess.charAt(i)] = 'yellow';
			} else {
				console.log('big fat wrong');
				letters[p.guess.charAt(i)] = 'grey';
			}
		}
		return result;
	}
}
// Running of the rounds
// function rounds(p1, p2) {
//   var OneResult = correctGuess(p1);
//   var TwoResult = correctGuess(p2);
//   p1.turns -= 1;
//   p2.turns -= 1;
//   if (OneResult == TwoResult) {
//     if (OneResult) {
//       console.log("It's a tie");
//       p1.roundResult = "It's a tie";
//       p2.roundResult = "It's a tie";
//       return p1;
//     } else {
//       console.log("Both wrong");
//       p1.roundResult = "No winners";
//       p2.roundResult = "No winners";
//       return p1;
//     }
//   } else {
//     if (OneResult) {
//       console.log("Player 1 is winner");
//       p1.roundResult = "Player 1 won";
//       p2.roundResult = "Player 2 lost";
//       return p1;
//     } else {
//       console.log("Player 2 won");
//       p1.roundResult = "Player 1 lost";
//     }
//   }
// }

// module.exports = {playerWord, correctGuess, rounds}
