import { add, mul } from "./mathFunctions";

describe("Math functions test", () => {
  it("check add function", () => {
    expect(add(1, 2)).toBe(3);
  });
  it("Check mul function", () => {
    expect(mul(2, 3)).toBe(6);
  });
});
