// const {playerWord, correctGuess, rounds} = require('./logic');
// const {Player} = require('./class/player')

let letterCount = '3'
let playOneName = 'Jane'
let playTwoName = 'Bill'

function setUpGame(e){
    e.preventDefault()
    letterCount = document.wordChoice.letterCount.value
    playOneName = document.wordChoice.playerOne.value
    playTwoName = document.wordChoice.playerTwo.value
}

function playGame(){
    // console.log("You started this game")
    playerWord(letterCount)
    // console.log("testing our return of words:", theWords)
    var playing = true
    while (playing) {
        var playOneRandWord =  theWords.playerOneWord //'end' //theWords.playerOneWord
        var playTwoRandWord = theWords.playerTwoWord //'dog' //theWords.playerTwoWord
        var playerOne = new Player(playOneName, playOneRandWord)
        console.log("Player One instance created", playerOne)
        var playerTwo = new Player(playTwoName, playTwoRandWord)
        console.log("Player Two instance created", playerTwo)
        // build game board
        var node = document.createElement('div')
        for (var i = 1; i <=6; i++) {
            for (var lc = 1; lc <= letterCount; lc++) {
                var span = document.createElement('span')
                span.setAttribute('class', 'letter')
                node.appendChild(span)
            }
        }
        document.getElementById('board').appendChild(node)
        // Rounds
        for(r=1; r<=6; r++){
            
        }
        playing = false
    }
}
// playGame()