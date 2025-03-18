const buttons = document.querySelectorAll("button")

const playerScoreEl = document.querySelector("#userScore")
const computerScoreEl = document.querySelector("#computerScore")

const roundResults = document.querySelector("#roundResults")
const roundStatus = document.querySelector("#roundStatus")
const roundInfo = document.querySelector("#roundInfo")


let playerScore = 0
let computerScore = 0

playerScoreEl.textContent = playerScore;
computerScoreEl.textContent = computerScore;

buttons.forEach((button) => {
	button.addEventListener("click", () => {
	const result = playRound(button.id, computerChoice())
	roundResults.style.display = "flex"

	if (playerScore >= 5) {
		roundStatus.textContent = "You win! Play again?"
		playerScore = 0;
		computerScore = 0;
		playerScoreEl.textContent = playerScore;
		computerScoreEl.textContent = computerScore;
	}

	if (computerScore >= 5) {
		roundStatus.textContent = "You lose! Play again?"
		playerScore = 0;
		computerScore = 0;
		playerScoreEl.textContent = playerScore;
		computerScoreEl.textContent = computerScore;
	}

	})
})


function computerChoice() {
	const choices = ["rock", "paper", "scissors"]
	const randomChoice = Math.floor(Math.random() * choices.length)
	return choices[randomChoice]
}

function playRound(playerChoice, computerChoice) {
	if (playerChoice === computerChoice) {
		roundStatus.textContent = "It's a tie!"
		roundInfo.textContent = `Tie both played ${playerChoice}`
		return "It's a tie!"
	} else if  (
    (playerChoice=== "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
		playerScore++
		playerScoreEl.textContent = playerScore;
		roundStatus.textContent = "You Win!";
		roundInfo.textContent = `${playerChoice} beats ${computerChoice}`
		return "You win! " + playerChoice + " beats " + computerChoice;
	} else {
		computerScore++
		computerScoreEl.textContent = computerScore;
		roundStatus.textContent = "You lose!"
		roundInfo.textContent = `${computerChoice} beats ${playerChoice}`
		return "You lose! " + computerChoice + " beats " + playerChoice;
	}
}