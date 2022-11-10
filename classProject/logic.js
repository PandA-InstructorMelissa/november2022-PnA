var wordBank = {
    3: ['cat', 'dog', 'for', 'the', 'our','way', 'end', 'css'],
    4: ['hold', 'word', 'bank', 'four', 'work', 'java', 'grey', 'week', 'read', 'game', 'code', 'node', 'html'],
    5: ['right', 'place', 'color', 'wrong', 'apple', 'guess', 'beach', 'board', 'bored', 'alive', 'timer', 'clock', 'space', 'class', 'react', 'nodes']
}

var letters = {'a': 'white', 'b': 'white', 'c': 'white', 'd': 'white', 'e': 'white', 'f': 'white', 'g': 'white', 'h': 'white', 'i': 'white', 'j': 'white', 'k': 'white', 'l': 'white', 'm': 'white', 'n': 'white', 'o': 'white', 'p': 'white', 'q': 'white', 'r': 'white', 's': 'white','t': 'white', 'u': 'white', 'v': 'white', 'w': 'white', 'x': 'white', 'y': 'white', 'z': 'white'}

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

function choseWord(a) {
    var random = Math.floor(Math.random()* wordBank[a].length)
    var theWord = wordBank[a][random]
    return theWord
}

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