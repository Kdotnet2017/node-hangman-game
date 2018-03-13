var Letter = function (letter) {
    this.charLetter = letter;
    this.isGuessed = false;
    this.whatIsCharLetter = function () {
        if (this.isGuessed) {
            return this.charLetter;
        }
        else {
            return "_";
        }
    };
    this.charWasGuessed = function (char) {
        if (char === this.charLetter) {
            this.isGuessed = true;
        }
        else {
            this.isGuessed = false;
        }
    };
}
module.exports = Letter;