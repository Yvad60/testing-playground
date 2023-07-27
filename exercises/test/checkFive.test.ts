import checkFive from "../checkFive";

describe("checkFive tests", () => {
  it("should number size", () => {
    expect(checkFive(20)).toBe("20 is greater than 5.");
    expect(checkFive(20)).not.toBeUndefined();
  });
  it("Should return empty string when no argument provided", () => {
    expect(checkFive()).toBe("");
    expect(checkFive()).toBeFalsy();
  });
});
