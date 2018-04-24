function Letter (char) {
    this.char = char
    this.hasGuessed = false
}

Letter.prototype.checkStatus = function () {
    if (this.hasGuessed) {
        return this.char
    } else {
        return "_"
    }
}

Letter.prototype.checkGuess = function (guess) {
    if (guess === this.char) {
        this.hasGuessed = true
    }
}

module.exports = Letter