let humanChoice
let computerChoice 

function getComputerChoice(){
   let localComputerChoice = Math.floor(Math.random()*3)
if (localComputerChoice == 0){
    computerChoice = "Rock"
}
else if (localComputerChoice == 1){
    computerChoice = "Paper"
}
else if (localComputerChoice == 2){
    computerChoice = "Scissors"
}
}

rockChoiceBtn = document.querySelector("#btn-rock")
paperChoiceBtn = document.querySelector("#btn-paper")
scissorsChoiceBtn = document.querySelector("#btn-scissors")
resultsDiv = document.querySelector("#results")

rockChoiceBtn.addEventListener("click",()=>{
    console.log("Player option is Rock")
    humanChoice = "Rock"
    getComputerChoice()
    playRound()
})

paperChoiceBtn.addEventListener("click",()=>{
console.log("Player option is Paper")
humanChoice = "Paper"
getComputerChoice()
playRound()})

scissorsChoiceBtn.addEventListener("click",()=>{
    console.log("Player option is Scissors")
    humanChoice = "Scissors"
    getComputerChoice()
    playRound()})

let humanScore = 0
let computerScore = 0

function playRound(){
    if (humanChoice == "Paper" && computerChoice =="Scissors" 
    ||humanChoice == "Rock" && computerChoice =="Paper"
    ||humanChoice == "Scissors" && computerChoice =="Rock"  ){
        computerScore++
        console.log(`You lose ${computerChoice} beats ${humanChoice}`)
        resultsDiv.innerText = `You lose ${computerChoice} beats ${humanChoice}`
    }
    else if (computerChoice == "Paper" && humanChoice =="Scissors" 
        ||computerChoice == "Rock" && humanChoice =="Paper"
        ||computerChoice == "Scissors" && humanChoice =="Rock"  ){
            humanScore++
        console.log(`You won ${humanChoice} beats ${computerChoice}`)
        resultsDiv.innerText = `You won ${humanChoice} beats ${computerChoice}`

    }
    else if(computerChoice===humanChoice){
        console.log("Its a Draw")
        resultsDiv.innerText = `Its a Draw`

    }
    
    console.log(`Player score is${humanScore}`)
      resultsDiv.innerText += `\nPlayer score is ${humanScore}`
    console.log(`Computer score is${computerScore}`)
    resultsDiv.innerText += `\nComputer score is ${computerScore}`
    if(humanScore >= 5){
         resultsDiv.innerText = `\n YOU WON`
    }
    else if(computerScore >= 5){
         resultsDiv.innerText = `\n YOU LOSE`
    }
}
