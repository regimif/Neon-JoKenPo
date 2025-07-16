// Game Logic Module
// Handle the game logic rules. Uses the same rules as any rock-paper-scissors game.

// [1] Define choices and export them
// Choices are defined as a constant array of strings.
export const choices = ["rock", "paper", "scissors"] as const;
// Type Choice is a union type of the choices.
export type Choice = (typeof choices)[number];

// [2] Function to determine the result of a game round
// Takes player's choice and computer's choice, returns the result as a string.
export function getResult(player: Choice, computer: Choice): string {
  // Creates a dictionary mapping for winning conditions.
  // Each key is a player's choice, and the value is the choice it beats.
  const winMap = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  // If player and computer choices are the same, return "Draw!"
  if (player === computer) return "Draw!";
  // If player's key in winMap matches computer's choice, player wins.
  if (winMap[player] === computer) return "You win!";
  // Otherwise, player loses.
  return "You lose!";
}
