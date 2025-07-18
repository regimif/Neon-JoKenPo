import { render, screen, fireEvent } from "@testing-library/react";
import ChoiceButtons from "@components/ChoiceButtons";
import { vi } from "vitest";

describe("ChoiceButtons", () => {
  const mockOnChoose = vi.fn();

  it("renders all choice buttons", () => {
    render(<ChoiceButtons onChoose={mockOnChoose} />);
    expect(screen.getByRole("button", { name: /Rock/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Paper/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Scissors/i })
    ).toBeInTheDocument();
  });

  it("calls onChoose with correct choice when a button is clicked", () => {
    render(<ChoiceButtons onChoose={mockOnChoose} />);
    const rockButton = screen.getByRole("button", { name: /Rock/i });
    fireEvent.click(rockButton);
    expect(mockOnChoose).toHaveBeenCalledWith("rock");
  });
});
