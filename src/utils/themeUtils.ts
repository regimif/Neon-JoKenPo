// [1] Get the initial theme for the app
// Checks localStorage first; if none is found, uses system preference (dark → neon)
export const getInitialTheme = (): "light" | "neon" => {
  const saved = localStorage.getItem("jokenpo-theme");
  if (saved === "light" || saved === "neon") return saved;

  // If not found, try to determine the initial theme based on system preferences
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "neon";
  }

  // 'Light' is the default theme
  return "light";
};

// [2] Toggle theme based on current one
// Changes the theme from light to neon or vice versa.
export function getNextTheme(current: "light" | "neon"): "light" | "neon" {
  return current === "light" ? "neon" : "light";
}
