const inquirer = require("inquirer")
const Word = require("./word.js")
const wordList = require("./wordList.js")

let correctWord;
let checkWord;
let wordArr;
let word;
let state;
let guesses = 10;
let guessedLetters = []

function setupGame() {
    let ranNum = Math.floor(Math.random() * wordList.length)
    
    correctWord = wordList[ranNum]

    makeArray(correctWord)

    checkWord = wordArr.join(" ")

    word = new Word(wordArr)
}

function makeArray(string) {
    wordArr = correctWord.split("")
}

function playGame() {
    console.clear()

    word.showWord()

    console.log(`You have ${guesses} remaining.`)
    console.log(`You have guessed: ${guessedLetters.join(" ")}`)
    
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Please guess a letter:"
        }
    ]).then((data) => {
        guessedLetters.push(data.guess)

        state = word.makeGuess(data.guess)

        guesses--

        if (checkWord === state) {
            console.clear()
            console.log("YOU WIN!")
        } else if (guesses < 1) {
            console.log("YOU LOSE!")
        } else {
            playGame()
        }

    })
}

setupGame()
word.showWord()
playGame()


