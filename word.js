var letter = require("./letter.js");
var Word = function (word) {
    this.currentWord = word;
    this.letters = [];
    this.getLetters = function () {
        for (var i = 0; i < this.currentWord.length; i++) {
            this.letters.push(new letter(this.currentWord[i]));
        }
        //for every game when getLetters() runs will set the counter once.
        this.counter = this.letters.length;
    };
    this.displayWord = function () {
        var strWord = "";
        for (var i = 0; i < this.letters.length; i++) {
            strWord += this.letters[i].whatIsCharLetter() + " ";
        }
        return strWord;
    };
    this.setGuessedLetter = function (char) {
        var isCorrect = false;
        for (var i = 0; i < this.letters.length; i++) {
            if (char === this.letters[i].charLetter) {
                // deducting counter only once
                if (!this.letters[i].isGuessed) {
                    this.counter--;
                }
                this.letters[i].isGuessed = true;
                isCorrect = true;
            }
        }
        return isCorrect;
    };
    this.counter = 0; // counter is for checking  end of the game
}
module.exports = Word;