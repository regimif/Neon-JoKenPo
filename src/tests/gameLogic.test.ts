// src/tests/gameLogic.test.ts
import { getResult } from "@utils/gameLogic";

describe("getResult", () => {
  it("should return 'You win!' when player beats computer", () => {
    expect(getResult("rock", "scissors")).toBe("You win!");
    expect(getResult("scissors", "paper")).toBe("You win!");
    expect(getResult("paper", "rock")).toBe("You win!");
  });

  it("should return 'You lose!' when computer beats player", () => {
    expect(getResult("scissors", "rock")).toBe("You lose!");
    expect(getResult("paper", "scissors")).toBe("You lose!");
    expect(getResult("rock", "paper")).toBe("You lose!");
  });

  it("should return 'Draw!' when both choose the same", () => {
    expect(getResult("rock", "rock")).toBe("Draw!");
    expect(getResult("paper", "paper")).toBe("Draw!");
    expect(getResult("scissors", "scissors")).toBe("Draw!");
  });
});
