import { render, screen, fireEvent } from "@testing-library/react";
import Scoreboard from "@components/Scoreboard";
import { vi } from "vitest";

describe("Scoreboard", () => {
  const mockScore = {
    player: 3,
    computer: 2,
    draws: 1,
  };

  it("renders the current scores correctly", () => {
    render(<Scoreboard score={mockScore} onReset={() => {}} />);
    expect(screen.getByText(/Player:/)).toHaveTextContent("Player: 3");
    expect(screen.getByText(/Computer:/)).toHaveTextContent("Computer: 2");
    expect(screen.getByText(/Draws:/)).toHaveTextContent("Draws: 1");
  });

  it("calls onReset when reset button is clicked", () => {
    const onReset = vi.fn();
    render(<Scoreboard score={mockScore} onReset={onReset} />);
    const button = screen.getByRole("button", { name: /reset/i });
    fireEvent.click(button);
    expect(onReset).toHaveBeenCalledTimes(1);
  });
});
