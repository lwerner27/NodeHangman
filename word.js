let Letter = require("./letter.js")

function Word (array) {
    this.word = []
    
    for (let i = 0; i < array.length; i++) {
        this.word.push(new Letter(array[i]))
    }
}

Word.prototype.showWord = function() {
    let currentStateArray = []
    let currentStateString = ""

    for (let i  = 0; i < this.word.length; i++) {
        currentStateArray.push(this.word[i].checkStatus())
    }

    currentStateString = currentStateArray.join(" ")

    console.log(currentStateString)
    
    return currentStateString
    
}

Word.prototype.makeGuess = function (char) {
    for (let i = 0; i < this.word.length; i++ ) {
        this.word[i].checkGuess(char)
    }

    // console.log(this.showWord())

    return this.showWord()

}

module.exports = Word