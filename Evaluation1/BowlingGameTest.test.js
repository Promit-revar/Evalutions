const {CalculateScore}= require("./BallingGame");
test("Calculate scores for the frames..", () => {
    expect(CalculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
  test("Calculate scores for the frames..", () => {
    expect(CalculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10,10,10])).toBe(111);
  });