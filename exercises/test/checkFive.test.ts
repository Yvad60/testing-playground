import checkFive from "../checkFive";
describe("checkFive tests", () => {
  it("should number size", () => {
    expect(checkFive(20)).toBe("20 is greater than 5.");
  });
});
