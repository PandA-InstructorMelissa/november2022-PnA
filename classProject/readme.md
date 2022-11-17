Worduel


# Front End
1. Boxes to hold letters for the guesses
2. Keyboard
3. Scripting for colors (green right letter right place, yellow right letter wrong place, grey wrong letter wrong place)
7. Keyboard colors



# JavaScript
1. word bank = Done
2. Start with a random word from list = Done
3. A way to check our guess with the word = Done
4. a way to keep the game alive
5. timer
6. players
7. Game choices # of letters in word 
8. Keyboard = Doneish


# Functions
- wordBank
- letters
- playerWord(letterCount)
- choseWord(letterCount) - auto run inside playerWord (choses random word from wordBank)
- checkGuess(guess, answer) - changing key colors and guess letter colors


# Game logic path
1. Players chose word count, and enter names on html form on submit activates playGame Function (game.js)
2. PlayGame then activates setUpGame Function (logic.js)
3. SetUpGame simply takes in the form inputs and added them to global variables (found on game.js)
4. Next in PlayGame playerWord function (logic.js) is activated taking in the updated variable letterCount
5. PlayerWord activates choseWord function which takes in the letterCount and returns a random word from the correct array, it does this twice, once for each player and returns an object called theWords
6. Next in playGame we set up the while loop and then take  randomly chosen words, and the updated player names and create our player instance using our player class (class/player.js)
7. Next using the player instances and hard coded variable we activate drawPlayerBoard function (logic.js) for each player
8. In drawPlayerBoard we first build the 6 rows for each guess adding classes and ids
9. Next in drawPlayerBoard we build the keyboard below the player board. Adding click events to the keys and activating letterChoice
10. Letterchoice takes in the player instance and the key from drawPlayerBoard. It then updates the player instance guess with the letters chosen
