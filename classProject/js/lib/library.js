const updateBoard = (player, event) => {
	let currentBoxPosition = 0;
	console.log('I clicked the letter', event.target.innerText);
	var l = event.target.innerText;
	console.log('Current index:', currentBoxPosition);
	if (player.word.includes(l) && player.word[currentBoxPosition] == l) {
		event.target.setAttribute('class', 'green');
		currentBox.style.backgroundColor = 'green';
	} else if (player.word.includes(l)) {
		event.target.setAttribute('class', 'green');
		currentBox.style.backgroundColor = 'yellow';
	} else {
		event.target.setAttribute('class', 'red');
		currentBox.style.backgroundColor = 'red';
	}
	currentBox.innerText = l;
	player.letterChoice(l);
	if (player.guess.length === player.word.length) {
		currentRow = currentRow.nextElementSibling;
		currentBox = currentRow.firstElementChild;
		player.guess = '';
		currentBoxPosition = 0;
		console.log(currentRow);
		console.log(currentBox);
	} else {
		currentBox = currentBox.nextElementSibling;
		currentBoxPosition++;
	}
};

const makePlayerBoard = (p, num) => {
	var node = document.createElement('div');
	node.setAttribute('class', 'boardGuess');
	node.setAttribute('id', num);
	var h2 = document.createElement('h2');
	var name = document.createTextNode(p.name);
	h2.appendChild(name);
	node.appendChild(h2);
	// builds 6 rows
	for (var i = 1; i <= 6; i++) {
		var div = document.createElement('div');
		div.setAttribute('class', 'row');
		div.setAttribute('id', num + i);
		// builds each letter box in the row
		for (var lc = 1; lc <= letterCount; lc++) {
			var span = document.createElement('span');
			span.setAttribute('class', 'letter');
			div.appendChild(span);
		}
		node.appendChild(div);
	}
};

const makePlayerKeyboard = async (p, num) => {
	var keys = document.createElement('div');
	keys.setAttribute('class', 'keyboard');
	for (var i = 0; i < 26; i++) {
		var key = document.createElement('span');
		var value = document.createTextNode(Object.keys(p.keyboard)[i]);
		key.addEventListener('click', (event) => {
			updateBoard(p, event);
		});
		key.appendChild(value);
		key.setAttribute('class', Object.values(p.keyboard)[i]);
		keys.appendChild(key);
	}
	let node = await document.getElementById(num).appendChild(keys);
	document.getElementById('board').appendChild(node);
};
