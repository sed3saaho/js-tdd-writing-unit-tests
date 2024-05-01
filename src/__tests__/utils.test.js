// Your tests here
import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
      
        const points = pointsForWord(word);
      
        expect(points).toBe(7);
      });
  it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
    const word = "test";

    const points = pointsForWord(word);

    expect(points).toBe(7);
  });
});
