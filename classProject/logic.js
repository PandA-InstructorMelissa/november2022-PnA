var wordBank = {
    'three': ['cat', 'dog', 'for', 'the', 'our','way', 'end', 'css'],
    'four': ['hold', 'word', 'bank', 'four', 'work', 'java', 'grey', 'week', 'read', 'game', 'code', 'node', 'html'],
    'five': ['right', 'place', 'color', 'wrong', 'apple', 'guess', 'beach', 'board', 'bored', 'alive', 'timer', 'clock', 'space', 'class', 'react', 'nodes']
}

var letters = {'a': 'white', 'b': 'white', 'c': 'white', 'd': 'white', 'e': 'white', 'f': 'white', 'g': 'white', 'h': 'white', 'i': 'white', 'j': 'white', 'k': 'white', 'l': 'white', 'm': 'white', 'n': 'white', 'o': 'white', 'p': 'white', 'q': 'white', 'r': 'white', 's': 'white','t': 'white', 'u': 'white', 'v': 'white', 'w': 'white', 'x': 'white', 'y': 'white', 'z': 'white'}

function playerWord(a='three'){ 
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

function choseWord(a) {
    var random = Math.floor(Math.random()* wordBank[a].length)
    var theWord = wordBank[a][random]
    return theWord
}

function checkGuess(b, c){
    var result = 'Guess Again'
    if(b == c) {
        result = 'Correct'
        // console.log(true)
        return result
    }
    else {
        for(var i = 0; i < b.length; i++) {
            if (b.charAt(i) == c.charAt(i)) {
                console.log('letter match change to green')
                letters[b.charAt(i)] = 'green'
            }
            else if(c.includes(b.charAt(i))) {
                console.log('letter in word wrong place change yellow')
                letters[b.charAt(i)] = 'yellow'
            }
            else {
                console.log('big fat wrong')
                letters[b.charAt(i)] = 'grey'
            }
        }
        return result
    }
}

module.exports = {playerWord, checkGuess}