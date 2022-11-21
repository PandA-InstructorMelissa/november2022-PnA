class Player {
	constructor(name, a) {
		this.name = name;
		this.turns = 6;
		this.word = this.setRandomWord(a);
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

	setRandomWord(a) {
		var random = Math.floor(Math.random() * wordBank[a].length);
		return wordBank[a][random];
	}
}
// module.exports = {Player}
