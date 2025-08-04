import "./App.css";
import { useState } from "react";

import HowToPlayModal from "@components/HowToPlayModal";

import ChoiceButtons from "@components/ChoiceButtons";
import type { Choice } from "@utils/gameLogic";
import { getResult } from "@utils/gameLogic";

import { getInitialScore, clearScore } from "@utils/scoreUtils";
import type { Score } from "@utils/scoreUtils";

import { getInitialTheme, getNextTheme } from "@utils/themeUtils";

import {
  useThemeEffect,
  useSaveScore,
  useInitBodyClass,
} from "@hooks/useCustomEffects";

import {
  getComputerChoice,
  updateScore,
  getInitialScoreState,
} from "@utils/gameHandlers";

import ThemeSwitcher from "@components/ThemeSwitcher";

import Scoreboard from "@components/Scoreboard";

import ResultDisplay from "@components/ResultDisplay";

function App() {
  const [showHowToPlay, setShowHowToPlay] = useState(true);

  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const [score, setScore] = useState<Score>(getInitialScore);

  const [theme, setTheme] = useState<"light" | "neon">(getInitialTheme);
  const isNeonTheme = theme === "neon";

  useThemeEffect(theme);
  useSaveScore(score);
  useInitBodyClass();

  const toggleTheme = () => setTheme((prev) => getNextTheme(prev));

  const handlePlayerChoice = (choice: Choice) => {
    const computer = getComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computer);
    const res = getResult(choice, computer);
    setResult(res);

    setScore((prev) => updateScore(prev, res));
  };

  const handleResetScore = () => {
    setScore(getInitialScoreState());
    clearScore();
  };

  return (
    <div className={`app ${theme}`} role="main">
      <div className="top-bar">
        <button
          className="howto-btn"
          aria-label="How to play"
          onClick={() => setShowHowToPlay(true)}
        >
          ?
        </button>
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
      </div>

      <HowToPlayModal
        open={showHowToPlay}
        onClose={() => setShowHowToPlay(false)}
      />

      <h1>JoKenPo</h1>
      <Scoreboard score={score} onReset={handleResetScore} />
      <ChoiceButtons onChoose={handlePlayerChoice} />
      <ResultDisplay
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
        theme={isNeonTheme ? "neon" : "default"}
      />
    </div>
  );
}

export default App;
