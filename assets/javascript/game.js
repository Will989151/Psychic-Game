var wins = 0;
var losses = 0;
var guesses = 10;
var guessedArray = [];
var randomLetter;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

randomLetter = letters[Math.floor(Math.random() *letters.length)];
console.log(randomLetter);

function letterSelector() {
    randomLetter = letters[Math.floor(Math.random() *letters.length )];
    console.log(randomLetter);
}

function keyLogger() {
    guessedArray.push(onkeyup);
}

document.onkeyup = function(event) {
    var playersChoice = event.onkeyup;

    if (playersChoice === randomLetter) {
        wins++;
        guesses = 10;
        guessedArray = [];
    }

    letterSelector();
    if  (playersChoice !== randomLetter) {
        guesses--;
    }

    if (guesses === 0) {
        losses++;
        guessedArray = [];
        guesses = 10;
    }

    if (guessedArray.indexOf(guesses) >= 0) {

    }  else {
        guessedArray.push(guesses);
        
        document.getElementById("Guesses Left").innerHTML = guesses;
        document.getElementById("Wins").innerHTML = wins;
        document.getElementById("Losses").innerHTML = losses;
        document.getElementById("Your Guesses So Far").innerHTML = guessedArray;
    }

}
