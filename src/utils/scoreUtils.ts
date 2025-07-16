// [1] Type definition for Score
// Represents the game score state with counts for each outcome.
export type Score = {
  player: number;
  computer: number;
  draws: number;
};

// [2] Define score key for localStorage
const SCORE_KEY = "jokenpo-score";

// [3] Retrieves the score from localStorage or returns a default score
export function getInitialScore(): Score {
  const stored = localStorage.getItem(SCORE_KEY);
  return stored ? JSON.parse(stored) : { player: 0, computer: 0, draws: 0 };
}

// [4] Saves the current score to localStorage
export function saveScore(score: Score) {
  localStorage.setItem(SCORE_KEY, JSON.stringify(score));
}

// [5] Clear score from localStorage
export function clearScore() {
  localStorage.removeItem(SCORE_KEY);
}
