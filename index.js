var inquirer = require("inquirer");
var word = require("./word.js");
var wordsList = ['cat', 'horse', 'dog', 'sheep', 'goat', 'chicken', 'camel', 'goose', 'honey bee', 'goldfish', 'rabbit'];
var myword = "";
var remainingLetters = 12;
var guessedLetters = [];
// start game app.
var startHangman = function () {
    var randomIndex = Math.floor((Math.random() * wordsList.length - 1) + 1);
    myword = new word(wordsList[randomIndex]);
    myword.getLetters();
    console.log("\n\t\t" + myword.displayWord() + "\n");
    remainingLetters = 12;
    guessedLetters = [];
    var resultMessage = "\n";
    processHangman(resultMessage);
}
// process each game
var processHangman = function (resultMessage) {
    console.log(resultMessage);
    inquirer.prompt([
        {
            type: "input",
            name: "myLetter",
            message: "Guess a letter: "
        }
    ]).then(function (letterAns) {
        var isCorrect = myword.setGuessedLetter(letterAns.myLetter);
        console.log("\n\t\t" + myword.displayWord() + "\n");
        if (isCorrect) {
            resultMessage = "\n Correct! \n";
        }
        else {
            if (guessedLetters.indexOf(letterAns.myLetter) === -1) {
                remainingLetters--;
            }
            resultMessage = "\nIncoccerct! \n Remaing Letters to Guess: " + remainingLetters + "\n";
        }
        // to prevent duplicate decreament
        if (guessedLetters.indexOf(letterAns.myLetter) === -1) { guessedLetters.push(letterAns.myLetter); }
        if (myword.counter === 0) {
            console.log("\n WINNER! \n New Game:\n");
            startHangman();
        }
        else if (remainingLetters == 0) {
            console.log("\n LOST!! \n New Game: \n");
            startHangman();
        }
        else {
            processHangman(resultMessage);
        }
    });
};
startHangman();