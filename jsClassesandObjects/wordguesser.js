var secretLetters = ['P', 'O', 'P', 'E'];
var matchedLetters = ['_', '_', '_', '_'];
var wrongLetters = [];


function guessLetter(guess){
    for (var i = 0; i < secretLetters.length; i ++){
        if (guess === secretLetters[i]){
            matchedLetters[i] = guess;
            console.log("YOU GOT ONE!");
            console.log(matchedLetters);
            break;

        } else {
            wrongLetters.push(guess);
            consolle.log("NOPE!");
            console.log("Letters guessed so far: " + wrongLetters);
        }
    }
}