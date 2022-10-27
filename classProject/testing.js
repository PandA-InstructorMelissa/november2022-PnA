

var wordBank = {
    'three': ['cat', 'dog', 'for', 'the', 'our','way', 'end', 'css'],
    'four': ['hold', 'word', 'bank', 'four', 'work', 'java', 'grey', 'week', 'read', 'game', 'code', 'node', 'html'],
    'five': ['right', 'place', 'color', 'wrong', 'apple', 'guess', 'beach', 'board', 'bored', 'alive', 'timer', 'clock', 'space', 'class', 'react', 'nodes']
}
var a = 'three'
function playerWord(a){
    var playerOneWord = choseWord(a)
    console.log('player1 word:', playerOneWord)
    var playerTwoWord = choseWord(a)
    console.log('player2 word:', playerTwoWord)
    while(playerOneWord == playerTwoWord) {
        var playerTwoWord = choseWord(a)
        console.log('player2 word:', playerTwoWord)
    }
}
playerWord(a)

// function that tells us which letter count to chose a word from and chose random word
function choseWord(a) {
    var random = Math.floor(Math.random()* wordBank[a].length)
    var theWord = wordBank[a][random]
    console.log("the index is:", random)
    console.log("the word is:", theWord)
    return theWord
}
// choseWord('five')
