// src/tests/gameHandlers.test.ts
import { getComputerChoice, updateScore } from "@utils/gameHandlers";
import type { Score } from "@utils/scoreUtils";

describe("getComputerChoice", () => {
  it("should return a valid choice", () => {
    const validChoices = ["rock", "paper", "scissors"];
    for (let i = 0; i < 100; i++) {
      expect(validChoices).toContain(getComputerChoice());
    }
  });
});

describe("updateScore", () => {
  const baseScore: Score = { player: 0, computer: 0, draws: 0 };

  it("should increment player score on win", () => {
    const updated = updateScore(baseScore, "You win!");
    expect(updated.player).toBe(1);
    expect(updated.computer).toBe(0);
    expect(updated.draws).toBe(0);
  });

  it("should increment computer score on loss", () => {
    const updated = updateScore(baseScore, "You lose!");
    expect(updated.player).toBe(0);
    expect(updated.computer).toBe(1);
    expect(updated.draws).toBe(0);
  });

  it("should increment draws on draw", () => {
    const updated = updateScore(baseScore, "Draw!");
    expect(updated.player).toBe(0);
    expect(updated.computer).toBe(0);
    expect(updated.draws).toBe(1);
  });
});
