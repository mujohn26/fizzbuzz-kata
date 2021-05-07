const Fizzbuzz = require("../fizzbuzz");
describe("Fizzbuzz tests", () => {
  [
      [1, "1"],
      [3,'fizz'],
      [5,'buzz'],
      [13,'fizz'],
      [15,'fizzbuzz']
    ].forEach((number, index) => {
    const expected = number[1];
    const actual = number[0];

    it(`should return ${expected} if ${actual} is provided`, () => {
      expect(Fizzbuzz.FizzbuzzFunction(actual)).toEqual(expected);
    });
  });

  it('should return range of of 10 ', ()=>{
      const returnData= ['1','2','fizz','4','buzz','fizz','7','8','fizz','buzz']
      expect(Fizzbuzz.fizzbuzz(10)).toEqual(returnData)
  })
  it('should return range of of 15 ', ()=>{
    const returnData= ['1','2','fizz','4','buzz','fizz','7','8','fizz','buzz','11','fizz','fizz','14','fizzbuzz']
    expect(Fizzbuzz.fizzbuzz(15)).toEqual(returnData)
})
});
