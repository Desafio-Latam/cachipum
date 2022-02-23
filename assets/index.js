
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const posibleResults = document.querySelectorAll('button')

let userChoice
let computerchoice
let result


posibleResults.forEach(posibleResult => posibleResult.addEventListener('click', (e) =>{

    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber =Math.floor(Math.random()*3)+1//*3
    //console.log(randomNumber);
    if (randomNumber === 1) {
        computerchoice = 'roca'
    }
    if (randomNumber === 2) {
        computerchoice = 'tijera'
    }
    if (randomNumber === 3) {
        computerchoice = 'papel'
    }

    computerChoiceDisplay.innerHTML = computerchoice
}

function getResult() {
    if (computerchoice === userChoice) {
        result = 'Es un Empate'
    }
    if (computerchoice === 'roca' && userChoice === 'papel') {
        result = 'Tu Ganaste'
    }
    if (computerchoice === 'roca' && userChoice === 'tijeras') {
        result = 'Tu Perdiste'
    }
    if (computerchoice === 'papel' && userChoice === 'tijeras') {
        result = 'Tu Ganaste'
    }
    if (computerchoice === 'papel' && userChoice === 'roca') {
        result = 'Tu Perdiste'
    }
    if (computerchoice === 'tijeras' && userChoice === 'roca') {
        result = 'Tu Ganaste'
    }
    if (computerchoice === 'tijeras' && userChoice === 'papel') {
        result = 'Tu Perdiste'
    }
    resultDisplay.innerHTML = result
}
