import "./App.css";
import { useState, useEffect } from "react";
import ChoiceButtons from "./components/ChoiceButtons.tsx";
import type { Choice } from "./utils/gameLogic.ts";
import { choices, getResult } from "./utils/gameLogic.ts";

// Importing images for compatibility with Vercel. Vite handles it automatically,
// but Vercel requires explicit imports.
import rockImg from "./assets/rock.webp";
import paperImg from "./assets/paper.webp";
import scissorsImg from "./assets/scissors.webp";

const choiceImages: Record<Choice, string> = {
  rock: rockImg,
  paper: paperImg,
  scissors: scissorsImg,
};

function getResultColor(result: string) {
  if (result === "You win!") return "result-win";
  if (result === "You lose!") return "result-lose";
  return "result-draw";
}

type Score = {
  player: number;
  computer: number;
  draws: number;
};

const SCORE_KEY = "jokenpo-score";

function App() {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const [score, setScore] = useState<Score>(() => {
    const stored = localStorage.getItem(SCORE_KEY);
    return stored ? JSON.parse(stored) : { player: 0, computer: 0, draws: 0 };
  });

  const getInitialTheme = (): "light" | "neon" => {
    const saved = localStorage.getItem("jokenpo-theme");
    if (saved === "light" || saved === "neon") return saved;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "neon";
    }

    return "light";
  };

  const [theme, setTheme] = useState<"light" | "neon">(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("jokenpo-theme", theme);
    document.body.classList.toggle("neon-body", theme === "neon");
  }, [theme]);

  useEffect(() => {
    localStorage.setItem(SCORE_KEY, JSON.stringify(score));
  }, [score]);

  useEffect(() => {
    document.body.classList.add("theme-ready");
  }, []);

  const handlePlayerChoice = (choice: Choice) => {
    const computer = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computer);
    const res = getResult(choice, computer);
    setResult(res);

    setScore((prev) => {
      if (res === "You win!") return { ...prev, player: prev.player + 1 };
      if (res === "You lose!") return { ...prev, computer: prev.computer + 1 };
      return { ...prev, draws: prev.draws + 1 };
    });
  };

  const handleResetScore = () => {
    setScore({ player: 0, computer: 0, draws: 0 });
    localStorage.removeItem(SCORE_KEY);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "neon" : "light"));
  };

  return (
    <div className={`app ${theme}`} role="main">
      <button
        className="theme-switch-btn"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "light" ? "Neon" : "Light"} Mode`}
      >
        {theme === "light" ? "🌙 Neon Mode" : "☀️ Light Mode"}
      </button>
      <h1>JoKenPo</h1>
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
          onClick={handleResetScore}
          aria-label="Reset the current score"
        >
          Reset Score
        </button>
      </div>

      <ChoiceButtons onChoose={handlePlayerChoice} />

      <div className="result-wrapper">
        {playerChoice && computerChoice ? (
          <>
            <div className="choices-row">
              <div className="choice-col">
                <span className="choice-label">You</span>
                <img
                  src={choiceImages[playerChoice]}
                  alt={`Image of a hand representing ${playerChoice}`}
                  className="choice-img"
                  loading="lazy"
                />
              </div>
              <div className="choice-col">
                <span className="choice-label">Computer</span>
                <img
                  src={choiceImages[computerChoice]}
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
    </div>
  );
}

export default App;
