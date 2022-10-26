// // funcion random que devuelve piedra, papel o tijera

// // let options = ['rock', 'paper', 'scissors']
// // let getComputerChoice = Math.floor(Math.random()*options.length)
// // console.log(options[getComputerChoice])

// let humanChoice = prompt('choose wisely!')

// let playerScore = 0
// let computerScore = 0
// let roundWinner = ''

// // funcion para jugar una ronda y determinar el ganador

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    console.log(playerSelection, computerSelection, roundWinner)
}

// let options = ['rock', 'paper', 'scissors']
// let getComputerChoice = Math.floor(Math.random()*options.length)

// const playerSelection = humanChoice
// const computerSelection = options[getComputerChoice]

function computerPlay() {
    const number = (Math.random() * 3)
    if (number <= 1) {
        return 'rock'
    } else if (number >= 2) {
        return 'scissors'
    }
    else return 'paper'
}

let computerScore = 0
let playerScore = 0

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) 
    {
        playerScore++
        return `You Win! Score: ${playerScore} to ${computerScore}`
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'scissors' && playerSelection === 'paper') ||
        (computerSelection === 'paper' && playerSelection === 'rock')
    ) 
    {
        computerScore++
        return `You Lose! Score: ${computerScore} to ${playerScore}`
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('choose wisely!')
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
    }
    if (playerScore > computerScore) {
        console.log(`You're the winner! Final Score: ${playerScore} to ${computerScore}`);
    } else if (computerScore > playerScore) {
        console.log(`You're the loser. Final Score: ${playerScore} to ${computerScore}`);
    } else
        console.log(`You tied. Final Score: ${playerScore} to ${computerScore}`);
}

game()

