let userScore = 0
let pcScore = 0
let userScoreSpan = document.getElementById('user-score')
let pcScoreSpan = document.getElementById('computer-score')
const scoreBoard = document.querySelector('.score-board')
const result = document.querySelector('.result')
const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')
let userLabel = document.getElementById('user-label')
let pcLabel = document.getElementById('computer-label')

function getComputerChoice() { 
    const choices = ['rock', 'paper', 'scissors'] //array com as três possíveis escolhas do jogo
    const randomNumber = Math.floor(Math.random() * 3) //variável para obter um número aleatório entre 0 e 2 que servirá de índice
    return choices [randomNumber] //retorna 'rock', 'paper' ou 'scissors' de acordo com o valor aleatório
}

function win(user, computer) {
    userScore++
    userScoreSpan.innerHTML = userScore
    result.innerHTML = `${user[0].toUpperCase() + user.substring(1)} beats ${computer[0].toUpperCase() + computer.substring(1)}. You win!`
    userLabel.style = 'background: green'
    pcLabel.style = 'background: #e70e39'
}

function tie(user, computer) {
    result.innerHTML = `${user[0].toUpperCase() + user.substring(1)} equals ${computer[0].toUpperCase() + computer.substring(1)}, it's a tie! Try it again.`
    userLabel.style = 'background: #e70e39'
    pcLabel.style = 'background: #e70e39'
}

function lose(user, computer) {
    pcScore++
    pcScoreSpan.innerHTML = pcScore
    result.innerHTML = `${computer[0].toUpperCase() + computer.substring(1)} beats ${user[0].toUpperCase() + user.substring(1)}. PC wins!`
    pcLabel.style = 'background: green'
    userLabel.style = 'background: #e70e39'
}

function game (userChoice) {
    const computerChoice = getComputerChoice() //pega a função que retorna a escolha do PC
    if (userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'scissors' && computerChoice === 'paper') {
        win(userChoice, computerChoice)
    } else if (userChoice === 'rock' && computerChoice === 'rock' || userChoice === 'paper' && computerChoice === 'paper' || userChoice === 'scissors' && computerChoice === 'scissors') {
        tie(userChoice, computerChoice)
    } else {
        lose(userChoice, computerChoice)
    }
}

function main() { //cria botões para chamar a função "game" passando um parâmetro "rock, paper ou scissors"
    rock.addEventListener('click', function() {
        game('rock') 
    })
    
    paper.addEventListener('click', function() {
        game('paper')
    })
    
    scissors.addEventListener('click', function() {
        game('scissors')
    })
}

main()