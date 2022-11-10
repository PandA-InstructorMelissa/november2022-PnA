/*
// The Hard Coded Word Bank
var wordBank = {
    'three': ['cat', 'dog', 'for', 'the', 'our','way', 'end', 'css'],
    'four': ['hold', 'word', 'bank', 'four', 'work', 'java', 'grey', 'week', 'read', 'game', 'code', 'node', 'html'],
    'five': ['right', 'place', 'color', 'wrong', 'apple', 'guess', 'beach', 'board', 'bored', 'alive', 'timer', 'clock', 'space', 'class', 'react', 'nodes']
} */
var letters = {'a': 'white', 'b': 'white', 'c': 'white', 'd': 'white', 'e': 'white', 'f': 'white', 'g': 'white', 'h': 'white', 'i': 'white', 'j': 'white', 'k': 'white', 'l': 'white', 'm': 'white', 'n': 'white', 'o': 'white', 'p': 'white', 'q': 'white', 'r': 'white', 's': 'white','t': 'white', 'u': 'white', 'v': 'white', 'w': 'white', 'x': 'white', 'y': 'white', 'z': 'white'}
// Assigning a random word from the word bank to each player
// var a = 'three'
/*
function playerWord(a='three'){ // parameter will come from front end
    var playerOneWord = choseWord(a)
    // console.log('player1 word:', playerOneWord)
    var playerTwoWord = choseWord(a)
    // console.log('player2 word:', playerTwoWord)
    while(playerOneWord == playerTwoWord) {
        var playerTwoWord = choseWord(a)
        // console.log('player2 word:', playerTwoWord)
    }
    theWords = {
        'playerOneWord': playerOneWord,
        'playerTwoWord': playerTwoWord
    }
    return theWords
}
// playerWord()

// Randomizer function
// function that tells us which letter count to chose a word from and chose random word
function choseWord(a) {
    var random = Math.floor(Math.random()* wordBank[a].length)
    var theWord = wordBank[a][random]
    // console.log("the index is:", random)
    // console.log("the word is:", theWord)
    return theWord
}
// choseWord('five') */

// b = guess
// c = correct word
// console.log("testing our return of words:", theWords)
function correctGuess(p){
    // pass in the guess as parameter
    // pass in the correct word
    // if guess == correct return true
    // else false
    if(p.guess == p.word) {
        console.log(true)
        return true
    }
    else {
        for(var i = 0; i < p.guess.length; i++) {
            if (p.guess.charAt(i) == p.word.charAt(i)) {
                // console.log('letter match change to green')
                letters[p.guess.charAt(i)] = 'green'
                // console.log("The letters:", letters)
            }
            else if(p.word.includes(p.guess.charAt(i))) {
                // console.log('letter in word wrong place change yellow')
                letters[p.guess.charAt(i)] = 'yellow'
                // console.log("The letters:", letters)
            }
            else {
                // console.log('big fat wrong')
                letters[p.guess.charAt(i)] = 'grey'
                // console.log("The letters:", letters)
            }
        }
        return false
    }
}
// checkGuess('cab', 'cat') // words will come from front end

// check guesses for both at same time
// if both wrong guess decrease player turns -1
// if one player correct that player wins
// if both players correct tie
var playerOne = { name: 'Jane', turns: 6, word: 'end', guess: '' }
var playerTwo = { name: 'Bill', turns: 6, word: 'dog', guess: '' }

function rounds(p1, p2){
    p1.guess = 'end' //playerOne.guess
    p2.guess = 'dog' // playerTwo.guess
    var OneResult = correctGuess(p1)
    var TwoResult = correctGuess(p2)
    // console.log(OneResult)
    p1.turns -=1
    p2.turns -=1
    // console.log(p1)
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
rounds(playerOne, playerTwo)