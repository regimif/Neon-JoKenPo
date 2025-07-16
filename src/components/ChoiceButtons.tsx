// ChoiceButtons component
// Renders a row of buttons for user to pick between rock, paper, or scissors.
// Each button calls onChoose with the corresponding choice when clicked.

// [1] Imports
import type { Choice } from "@utils/gameLogic";
import { choices } from "@utils/gameLogic";

// [2] Type definition for props
interface Props {
  onChoose: (currentChoice: Choice) => void;
}

// [3] Component
const ChoiceButtons: React.FC<Props> = ({ onChoose }) => (
  <div className="choice-buttons-row">
    {/* Map choices array to get each button */}
    {choices.map((currentChoice) => (
      <button
        key={currentChoice}
        className="choice-btn"
        onClick={() => onChoose(currentChoice)} // Call onChoose with the current choice
        aria-label={`Choose ${currentChoice}`} // Accessibility label: describes the button's action
      >
        {/* Capitalize the first letter of the choice for display and return the rest of the string */}
        {currentChoice.charAt(0).toUpperCase() + currentChoice.slice(1)}
      </button>
    ))}
  </div>
);

// [4] Export
export default ChoiceButtons;
