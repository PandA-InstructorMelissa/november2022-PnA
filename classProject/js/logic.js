var wordBank = {
    3: ['cat', 'dog', 'for', 'the', 'our','way', 'end', 'css'],
    4: ['hold', 'word', 'bank', 'four', 'work', 'java', 'grey', 'week', 'read', 'game', 'code', 'node', 'html'],
    5: ['right', 'place', 'color', 'wrong', 'apple', 'guess', 'beach', 'board', 'bored', 'alive', 'timer', 'clock', 'space', 'class', 'react', 'nodes']
}

var letters = {'a': 'white', 'b': 'white', 'c': 'white', 'd': 'white', 'e': 'white', 'f': 'white', 'g': 'white', 'h': 'white', 'i': 'white', 'j': 'white', 'k': 'white', 'l': 'white', 'm': 'white', 'n': 'white', 'o': 'white', 'p': 'white', 'q': 'white', 'r': 'white', 's': 'white','t': 'white', 'u': 'white', 'v': 'white', 'w': 'white', 'x': 'white', 'y': 'white', 'z': 'white'}


// Game set up
function setUpGame(){
    letterCount = document.wordChoice.letterCount.value
    playOneName = document.wordChoice.playerOne.value
    playTwoName = document.wordChoice.playerTwo.value
}

// Setting the players words
function playerWord(a=3){ 
    var playerOneWord = choseWord(a)
    var playerTwoWord = choseWord(a)
    while(playerOneWord == playerTwoWord) {
        var playerTwoWord = choseWord(a)
    }
    theWords = {
        'playerOneWord': playerOneWord,
        'playerTwoWord': playerTwoWord
    }
    return theWords
}

// Randomizer
function choseWord(a) {
    var random = Math.floor(Math.random()* wordBank[a].length)
    var theWord = wordBank[a][random]
    return theWord
}
// build game board
function drawPlayerBoard(p, num) {
    // player Board
    var node = document.createElement('div')
    node.setAttribute('class', 'boardGuess')
    node.setAttribute('id', num)
    var h2 = document.createElement('h2')
    var name = document.createTextNode(p.name)
    h2.appendChild(name)
    node.appendChild(h2)
    // builds 6 rows
    for (var i = 1; i <=6; i++) {
        var div = document.createElement('div')
        div.setAttribute('class', 'row')
        div.setAttribute('id', num+i)
        // builds each letter box in the row
        for (var lc = 1; lc <= letterCount; lc++) {
            var span = document.createElement('span')
            span.setAttribute('class', 'letter')
            div.appendChild(span)
        }
        node.appendChild(div)
    }
    // player keyboard
    var keys = document.createElement('div')
    keys.setAttribute('class', 'keyboard')
    for (var i = 0; i < 26; i++) {
        var key = document.createElement('span')
        var value = document.createTextNode(Object.keys(p.keyboard)[i])
        key.addEventListener('click', (event)=> {
            console.log("I clicked the letter", event.target.innerText)
            event.target.setAttribute('class', 'grey')
            var l = event.target.innerText
            letterChoice(p,l)
        })
        key.appendChild(value)
        key.setAttribute('class', Object.values(p.keyboard)[i])
        keys.appendChild(key)
    }
    node.appendChild(keys)
    document.getElementById('board').appendChild(node)
}

// Onclick function
function letterChoice(p, key) {
    console.log("letter", key)
    console.log("what is p", p)
    p.guess += key
    console.log("the guess so far", p.guess)
}

// Checking player guess
function correctGuess(b, c){
    var result = 'Guess Again'
    if(p.guess == p.word) {
        console.log(true)
        return true
    }
    else {
        for(var i = 0; i < p.guess.length; i++) {
            if (p.guess.charAt(i) == p.word.charAt(i)) {
                console.log('letter match change to green')
                letters[p.guess.charAt(i)] = 'green'
            }
            else if(p.word.includes(p.guess.charAt(i))) {
                console.log('letter in word wrong place change yellow')
                letters[p.guess.charAt(i)] = 'yellow'
            }
            else {
                console.log('big fat wrong')
                letters[p.guess.charAt(i)] = 'grey'
            }
        }
        return result
    }
}
// Running of the rounds
function rounds(p1, p2){
    var OneResult = correctGuess(p1)
    var TwoResult = correctGuess(p2)
    p1.turns -=1
    p2.turns -=1
    if (OneResult == TwoResult) {
        if (OneResult) {
            console.log("It's a tie")
            return "It's a tie"
        } else {
            console.log("Both wrong")
            return 'No winners'
        }
    } else {
        if (OneResult) {
            console.log('Player 1 is winner')
            return "Player 1 wins"
        } else {
            console.log('Player 2 won')
            return "Player 2 wins"
        }
    }
}

// module.exports = {playerWord, correctGuess, rounds}