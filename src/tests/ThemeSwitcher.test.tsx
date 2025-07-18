import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "@components/ThemeSwitcher";
import { vi } from "vitest";

describe("ThemeSwitcher", () => {
  it("should display 🌙 Neon Mode when theme is 'light'", () => {
    render(<ThemeSwitcher theme="light" toggleTheme={() => {}} />);
    expect(screen.getByRole("button")).toHaveTextContent("🌙 Neon Mode");
  });

  it("should display ☀️ Light Mode when theme is 'neon'", () => {
    render(<ThemeSwitcher theme="neon" toggleTheme={() => {}} />);
    expect(screen.getByRole("button")).toHaveTextContent("☀️ Light Mode");
  });

  it("should call toggleTheme when clicked", () => {
    const mockToggle = vi.fn();
    render(<ThemeSwitcher theme="light" toggleTheme={mockToggle} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});
