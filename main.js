// funcion random que devuelve piedra, papel o tijera

let options = ['rock', 'paper', 'scissors']

let getComputerChoice = Math.floor(Math.random()*options.length)
console.log(options[getComputerChoice])

let humanChoice = prompt('choose wisely!')

// funcion para jugar una ronda y determinar el ganador

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'paper') {
        return result = "You Lose! Paper beats Rock"
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return result = "You Lose! Scissors beats paper"
    }   else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return result = "You Lose! rock beats scissors"
    }
    else {
        return result = 'you won!'
    }
}

const playerSelection = humanChoice
const computerSelection = options[getComputerChoice]

console.log(humanChoice)

console.log(playRound(playerSelection, computerSelection))