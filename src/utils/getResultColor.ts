// [1] Match color of the result text based on the game outcome
// This function returns a CSS class name based on the game result.
function getResultColor(result: string) {
  if (result === "You win!") return "result-win";
  if (result === "You lose!") return "result-lose";
  return "result-draw";
}

// [2] Export the function
export default getResultColor;
