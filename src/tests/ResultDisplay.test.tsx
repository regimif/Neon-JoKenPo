import { render, screen } from "@testing-library/react";
import ResultDisplay from "@components/ResultDisplay";
import type { Choice } from "@utils/gameLogic";

describe("ResultDisplay", () => {
  const mockPlayerChoice: Choice = "rock";
  const mockComputerChoice: Choice = "scissors";

  it("renders result and images when both choices are present", () => {
    render(
      <ResultDisplay
        playerChoice={mockPlayerChoice}
        computerChoice={mockComputerChoice}
        result="You win!"
      />
    );
    expect(screen.getByText("You")).toBeInTheDocument();
    expect(screen.getByText("Computer")).toBeInTheDocument();
    expect(screen.getByText("You win!")).toBeInTheDocument();

    const imgs = screen.getAllByRole("img");
    expect(imgs.length).toBe(2);
    expect(imgs[0]).toHaveAttribute("alt", "Image of a hand representing rock");
    expect(imgs[1]).toHaveAttribute(
      "alt",
      "Image of a hand representing scissors"
    );
  });

  it("renders placeholder when no choices are present", () => {
    render(
      <ResultDisplay playerChoice={null} computerChoice={null} result="" />
    );
    // Find the placeholder h2 by its class
    const placeholder = screen.getByRole("heading", { level: 2 });
    expect(placeholder).toHaveClass("result-text", "placeholder");
  });
});
