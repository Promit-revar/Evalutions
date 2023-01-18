const {CalculateScore}= require("./BallingGame");
test("Calculate scores for the frames..", () => {
    expect(CalculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
test("Calculate scores for the frames..", () => {
    expect(CalculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10,10,10])).toBe(111);
  });
  test("Calculate scores for the frames SPARE..", () => {
    expect(CalculateScore([10,0,0,5,5,2,3])).toBe(27);
  });
  