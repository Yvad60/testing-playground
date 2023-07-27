import { whoWon } from "../whoWon";

describe("Who won test", () => {
  it("Should allow the first user to win", () => {
    expect(whoWon("paper", "rock")).toBe("Player 1 wins!");
  });
  it("Should detect a tie", () => {
    expect(whoWon("paper", "paper")).toBe('TIE!');
  });
});
