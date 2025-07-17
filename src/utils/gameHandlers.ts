// [1] Import required tools
import { choices } from "@utils/gameLogic";
import type { Choice } from "@utils/gameLogic";
import type { Score } from "@utils/scoreUtils";

// [2] Randomly select a computer move
export function getComputerChoice(): Choice {
  return choices[Math.floor(Math.random() * choices.length)];
}

// [3] Based on the game result string, update the score
export function updateScore(prev: Score, result: string): Score {
  if (result === "You win!") return { ...prev, player: prev.player + 1 };
  if (result === "You lose!") return { ...prev, computer: prev.computer + 1 };
  return { ...prev, draws: prev.draws + 1 };
}

// [4] Reset the score to zero
export function getInitialScoreState(): Score {
  return { player: 0, computer: 0, draws: 0 };
}
