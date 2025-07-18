// [1] Define accepted theme values and prop types
type Theme = "light" | "neon";

type ThemeSwitcherProps = {
  theme: Theme;
  toggleTheme: () => void;
};

// [2] ThemeSwitcher: renders a button to toggle between Light and Neon themes
function ThemeSwitcher({ theme, toggleTheme }: ThemeSwitcherProps) {
  return (
    <button
      className="theme-switch-btn"
      onClick={toggleTheme} // Calls toggleTheme
      aria-label={`Switch to ${theme === "light" ? "Neon" : "Light"} Mode`} // Accessibility label
    >
      {/* If using light theme, show "Neon Mode + emoji" and vice versa */}
      {theme === "light" ? "🌙 Neon Mode" : "☀️ Light Mode"}
    </button>
  );
}

// [3] Export component
export default ThemeSwitcher;
