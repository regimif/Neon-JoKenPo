export const choices = ["rock", "paper", "scissors"] as const;

export type Choice = (typeof choices)[number];

export function getResult(player: Choice, computer: Choice): string {
  if (player === computer) return "Draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}
