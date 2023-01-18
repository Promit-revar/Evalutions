const {CalculateScore,getBestGame}= require("./BallingGame");

test("Calculate scores for the frames..", () => {
    expect(CalculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
test("Calculate scores for the frames..", () => {
    expect(CalculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 10,10,10])).toBe(111);
  });
test("Calculate scores for the frames SPARE..", () => {
    expect(CalculateScore([10,0,0,5,5,2,3])).toBe(27);
  });
  test("Should return best score from all the games...", () => {
    expect(getBestGame([[10,5,5,2,3],[10,5,5,10,10,3]])).toBe(66);
  });

  