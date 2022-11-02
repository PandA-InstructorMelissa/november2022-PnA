const {playerWord} = require('./logic');

function playGame(){
    console.log("You started this game")
    let letterCount = 'five' // 'three', 'four', or 'five'
    playerWord(letterCount)
    console.log("testing our return of words:", theWords)
}
playGame()