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
        drawPlayerBoard(playerOne, 'one')
        drawPlayerBoard(playerTwo, 'two')
        // Rounds
        if (playerOne.turns == 6) {
            // talk to board id=one
            // document.getElementById('one1').firstChild.innerHTML=key
            alert("Player One's turn")
            alert("Player One please enter your guess")
            console.log('player object check', playerOne.turns)
            console.log('player guess check as keys are pressed', playerOne.guess.length)

        }
        playing = false
    }
}
// playGame()