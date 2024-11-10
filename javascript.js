function getComputerChoice(){
   let computerChoice = Math.floor(Math.random()*3)
if (computerChoice == 0){
    return "Rock"
}
else if (computerChoice == 1){
    return "Paper"
}
else if (computerChoice == 2){
    return "Scissors"
}
}

function getHumanChoice(){
let choice = prompt("1 Rock 2 Paper 3 Scissors")
if (choice == 1){
    return "Rock"
}
else if (choice == 2){
    return "Paper"
}
else if (choice == 3){
    return "Scissors"
}
}

let humanScore = 0
let computerScore = 0

let humanChoice
let computerChoice = getComputerChoice()

function playRound(humanChoice,computerChoice){
    humanChoice = getHumanChoice()
    getComputerChoice()
    if (humanChoice == "Paper" && computerChoice =="Scissors" 
    ||humanChoice == "Rock" && computerChoice =="Paper"
    ||humanChoice == "Scissors" && computerChoice =="Rock"  ){
        computerScore++
        console.log(`You lose ${computerChoice} beats ${humanChoice}`)
    }
    else if (computerChoice == "Paper" && humanChoice =="Scissors" 
        ||computerChoice == "Rock" && humanChoice =="Paper"
        ||computerChoice == "Scissors" && humanChoice =="Rock"  ){
            humanScore++
        console.log(`You won ${humanChoice} beats ${computerChoice}`)
    }
    else if(computerChoice===humanChoice){
        console.log("Its a Draw")
    }
    console.log(`Player score is${humanScore}`)
    console.log(`Computer score is${computerScore}`)
}

playRound(humanChoice,computerChoice)
playRound(humanChoice,computerChoice)
playRound(humanChoice,computerChoice)
playRound(humanChoice,computerChoice)
playRound(humanChoice,computerChoice)


