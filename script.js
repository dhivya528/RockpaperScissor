const result=document.getElementById("result");
const userScoreEl=document.getElementById("userScore");
const computerScoreEl=document.getElementById("computerScore");
const historyList=document.getElementById("historyList");
let userScore=0;
let computerScore=0;
const choices=["rock","paper","scissors"];
function playGame(userChoice){
const computerChoice=choices[Date.now()%3]; 
let winner= "";
if(userChoice === computerChoice){
winner = "It's a draw!";
} 
else if(
(userChoice === "rock" && computerChoice === "scissors") ||
(userChoice === "paper" && computerChoice === "rock") ||
(userChoice === "scissors" && computerChoice === "paper")
 ){
	winner = "You win!";
    userScore++;
  }
  else{
    winner = "Computer wins!";
    computerScore++;
  }
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
  result.textContent =`You chose ${userChoice}, Computer chose ${computerChoice}. ${winner}`;
  const li = document.createElement("li");
  li.textContent = `You: ${userChoice} | Computer: ${computerChoice} → ${winner}`;
  historyList.prepend(li);
}
function resetGame() {
  userScore = 0;
  computerScore = 0;
  userScoreEl.textContent = 0;
  computerScoreEl.textContent = 0;
  result.textContent = "Make your move!";
  historyList.innerHTML = "";
}
