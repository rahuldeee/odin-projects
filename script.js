
        
function playGame() {
  
  let humanScore = 0;
  let computerScore = 0;

  
  function getComputerChoice() {
    const randomNum = Math.random();  
    
    if (randomNum < 0.33) {
      return "rock";      
    } else if (randomNum < 0.66) {
      return "paper";     
    } else {
      return "scissors";  
    }
  }

  
  function getHumanChoice() {
    let humanChoice = prompt("Enter 'rock', 'paper', or 'scissors':").toLowerCase();

    
    while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
      humanChoice = prompt("Invalid input. Please enter 'rock', 'paper', or 'scissors':").toLowerCase();
    }

    return humanChoice;
  }

  
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}.`);
      return;
    }

    
    if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
      humanScore++;  
    } else {
      console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
      computerScore++;  
    }

    
    console.log(`Score - You: ${humanScore}, Computer: ${computerScore}`);
  }

 
  for (let round = 1; round <= 5; round++) {
    console.log(`\nRound ${round}:`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log(`\nYou win the game! Final score - You: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`\nYou lose the game! Final score - You: ${humanScore}, Computer: ${computerScore}`);
  } else {
    console.log(`\nIt's a tie game! Final score - You: ${humanScore}, Computer: ${computerScore}`);
  }
}

playGame();
