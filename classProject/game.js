const {playerWord, checkGuess} = require('./logic');
const {Player} = require('./class/player')

function playGame(){
    // console.log("You started this game")
    let letterCount = 'three' // 'three', 'four', or 'five'
    playerWord(letterCount)
    // console.log("testing our return of words:", theWords)
    var playing = true
    while (playing) {
        var playOneName = 'Jane'
        var playTwoName = 'Bill'
        var playOneRandWord =  'end' //theWords.playerOneWord
        var playTwoRandWord = 'dog' //theWords.playerTwoWord
        var playerOne = new Player(playOneName, playOneRandWord)
        console.log("Player One instance created", playerOne)
        var playerTwo = new Player(playTwoName, playTwoRandWord)
        console.log("Player Two instance created", playerTwo)
        for(r=1; r<=6; r++){
            
        }
        playing = false
    }
}
playGame()