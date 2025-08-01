// [1] Import necessary modules and types
import type { Choice } from "@utils/gameLogic";
import { choiceImages, choiceImagesNeon } from "@utils/choiceImages";
import getResultColor from "@utils/getResultColor";

// [2] Define props type for ResultDisplay component
type ResultDisplayProps = {
  playerChoice: Choice | null;
  computerChoice: Choice | null;
  result: string;
  theme?: "default" | "neon";
};

// [3] Result display component
function ResultDisplay({
  playerChoice,
  computerChoice,
  result,
  theme = "default",
}: ResultDisplayProps) {
  const isValid = playerChoice && computerChoice;
  const images = theme === "neon" ? choiceImagesNeon : choiceImages;

  return (
    <div className="result-wrapper">
      {isValid ? (
        <>
          <div className="choices-row">
            <div className="choice-col">
              <span className="choice-label">You</span>
              <img
                src={images[playerChoice]}
                alt={`Image of a hand representing ${playerChoice}`}
                className="choice-img"
                loading="lazy"
              />
            </div>
            <div className="choice-col">
              <span className="choice-label">Computer</span>
              <img
                src={images[computerChoice]}
                alt={`Image of a hand representing ${computerChoice}`}
                className="choice-img"
                loading="lazy"
              />
            </div>
          </div>
          <h2
            className={`result-text ${getResultColor(result)}`}
            aria-live="polite"
          >
            {result}
          </h2>
        </>
      ) : (
        <>
          <div className="choices-row placeholder" />
          <h2 className="result-text placeholder">\u00A0</h2>
        </>
      )}
    </div>
  );
}

// [4] Export component
export default ResultDisplay;
