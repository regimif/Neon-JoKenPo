import type { Choice } from "../utils/gameLogic.ts";
import { choices } from "../utils/gameLogic.ts";

interface Props {
  onChoose: (choice: Choice) => void;
}

const ChoiceButtons: React.FC<Props> = ({ onChoose }) => (
  <div className="choice-buttons-row">
    {choices.map((choice) => (
      <button
        key={choice}
        className="choice-btn"
        onClick={() => onChoose(choice)}
        aria-label={`Choose ${choice}`}
      >
        {choice.charAt(0).toUpperCase() + choice.slice(1)}
      </button>
    ))}
  </div>
);

export default ChoiceButtons;
