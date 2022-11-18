class Player {
	constructor(name) {
		this.name = name;
		this.turns = 6;
		this.word = word;
		this.guess = '';
		this.roundResult = '';
		this.keyboard = {
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
		this.setRandomWord();
	}

	getGuess() {
		return this.guess;
	}

	letterChoice(key) {
		console.log('letter', key);
		this.guess += key;
		console.log('the guess so far', this.guess, 'length of guess', this.guess.length);
		// round(p);
	}

	setRandomWord() {
		var random = Math.floor(Math.random() * wordBank[a].length);
		this.word = wordBank[a][random];
	}
}
// module.exports = {Player}
