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
function checkGuess(b, c){
    // pass in the guess as parameter
    // pass in the correct word
    // if guess == correct return true
    // else false
    if(b == c) {
        console.log(true)
    }
    else {
        for(var i = 0; i < b.length; i++) {
            if (b.charAt(i) == c.charAt(i)) {
                console.log('letter match change to green')
                letters[b.charAt(i)] = 'green'
                console.log("The letters:", letters)
            }
            else if(c.includes(b.charAt(i))) {
                console.log('letter in word wrong place change yellow')
                letters[b.charAt(i)] = 'yellow'
                console.log("The letters:", letters)
            }
            else {
                console.log('big fat wrong')
                letters[b.charAt(i)] = 'grey'
                console.log("The letters:", letters)
            }
        }
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
    var nextRound = true
    p1.guess = 'bot' //playerOne.guess
    p2.guess = 'pet' // playerTwo.guess
    var OneResult = checkGuess(p1.guess, p1.word)
    var TwoResult = checkGuess(p2.guess, p2.word)
    
}
rounds(playerOne, playerTwo)

// change checkGuess to take playerinstance for this.keyboard

module.exports = {playerWord, checkGuess}