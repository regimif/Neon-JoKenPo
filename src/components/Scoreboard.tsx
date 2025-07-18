// [1] Define types for current score and reset function
type Score = {
  player: number;
  computer: number;
  draws: number;
};

type ScoreboardProps = {
  score: Score;
  onReset: () => void;
};

// [2] Scoreboard component displays the score and a reset button
function Scoreboard({ score, onReset }: ScoreboardProps) {
  return (
    <div className="scoreboard" role="region" aria-label="Scoreboard">
      <div className="score-item player-score">
        Player: <span>{score.player}</span>
      </div>
      <div className="score-item computer-score">
        Computer: <span>{score.computer}</span>
      </div>
      <div className="score-item draw-score">
        Draws: <span>{score.draws}</span>
      </div>
      <button
        className="reset-btn"
        onClick={onReset}
        aria-label="Reset the current score"
      >
        Reset Score
      </button>
    </div>
  );
}

// [3] Export component
export default Scoreboard;
