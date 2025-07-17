// [1] Imports required tools
import { useEffect } from "react";
import type { Score } from "@utils/scoreUtils";
import { saveScore } from "@utils/scoreUtils";

// [2] Custom Hooks
// Apply the theme effect on <body> whenever 'theme' changes
export function useThemeEffect(theme: "light" | "neon") {
  useEffect(() => {
    localStorage.setItem("jokenpo-theme", theme);
    document.body.classList.toggle("neon-body", theme === "neon");
  }, [theme]);
}

// Save the current score to localStorage whenever 'score' changes
export function useSaveScore(score: Score) {
  useEffect(() => {
    saveScore(score);
  }, [score]);
}

// Add 'theme-ready' class to <body> once, when the component mounts
// Prevents the default flash of wrong theme before JS applies the correct one
// (and spares your retinas from a white flash of doom!)
export function useInitBodyClass() {
  useEffect(() => {
    document.body.classList.add("theme-ready");
  }, []);
}
