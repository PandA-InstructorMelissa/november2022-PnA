// const {playerWord, correctGuess, rounds} = require('./logic');
// const {Player} = require('./class/player')

// Defaults Global
let letterCount = '3'
let playOneName = 'Jane'
let playTwoName = 'Bill'


function playGame(e){
    e.preventDefault()
    setUpGame()
    playerWord(letterCount)
    var playing = true
    while (playing) {
        var playOneRandWord =  theWords.playerOneWord //'end' //theWords.playerOneWord
        var playTwoRandWord = theWords.playerTwoWord //'dog' //theWords.playerTwoWord
        var playerOne = new Player(playOneName, playOneRandWord)
        console.log("Player One instance created", playerOne)
        var playerTwo = new Player(playTwoName, playTwoRandWord)
        console.log("Player Two instance created", playerTwo)
        drawPlayerBoard(playerOne)
        drawPlayerBoard(playerTwo)
        // Rounds
        for(r=1; r<=6; r++){
            
        }
        playing = false
    }
}
// playGame()