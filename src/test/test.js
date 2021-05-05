const fizzBuzz = require("../fizzbuzz");

describe("Fizzbuzz tests", () => {
  it("Should data when 3 is provided", () => {
    const returnData = ["1", "2", "fizz"];
    expect(fizzBuzz.fizzBuzz(3)).toEqual(returnData);
  });
  it("Should data when 4 is provided", () => {
    const returnData = ["1", "2", "fizz", "4"];
    expect(fizzBuzz.fizzBuzz(4)).toEqual(returnData);
  });
  it("Should data when 5 is provided", () => {
    const returnData = ["1", "2", "fizz", "4", "buzz"];
    expect(fizzBuzz.fizzBuzz(5)).toEqual(returnData);
  });
  it("Should data when 6 is provided", () => {
    const returnData = ["1", "2", "fizz", "4", "buzz", "fizz"];
    expect(fizzBuzz.fizzBuzz(6)).toEqual(returnData);
  });
  it("Should data when 7 is provided", () => {
    const returnData = ["1", "2", "fizz", "4", "buzz", "fizz", "7"];
    expect(fizzBuzz.fizzBuzz(7)).toEqual(returnData);
  });
  it("Should data when 13 is provided", () => {
    const returnData = [
      "1",
      "2",
      "fizz",
      "4",
      "buzz",
      "fizz",
      "7",
      "8",
      "fizz",
      "buzz",
      "11",
      "fizz",
      "fizz",
    ];
    expect(fizzBuzz.fizzBuzz(13)).toEqual(returnData);
  });
  it("Should data when 15 is provided", () => {
    const returnData = [
      "1",
      "2",
      "fizz",
      "4",
      "buzz",
      "fizz",
      "7",
      "8",
      "fizz",
      "buzz",
      "11",
      "fizz",
      "fizz",
      "14",
      "fizzbuzz",
    ];
    expect(fizzBuzz.fizzBuzz(15)).toEqual(returnData);
  });
  it("Should data when 100 is provided", () => {
    const returnData = [
      "1",
      "2",
      "fizz",
      "4",
      "buzz",
      "fizz",
      "7",
      "8",
      "fizz",
      "buzz",
      "11",
      "fizz",
      "fizz",
      "14",
      "fizzbuzz",
      "16",
      "17",
      "fizz",
      "19",
      "buzz",
      "fizz",
      "22",
      "fizz",
      "fizz",
      "buzz",
      "26",
      "fizz",
      "28",
      "29",
      "fizzbuzz",
      "fizz",
      "fizz",
      "fizz",
      "fizz",
      "fizz",
      "fizz",
      "fizz",
      "fizz",
      "fizz",
      "buzz",
      "41",
      "fizz",
      "fizz",
      "44",
      "fizzbuzz",
      "46",
      "47",
      "fizz",
      "49",
      "buzz",
      "fizz",
      "52",
      "fizz",
      "fizz",
      "buzz",
      "56",
      "fizz",
      "58",
      "59",
      "fizzbuzz",
      "61",
      "62",
      "fizz",
      "64",
      "buzz",
      "fizz",
      "67",
      "68",
      "fizz",
      "buzz",
      "71",
      "fizz",
      "fizz",
      "74",
      "fizzbuzz",
      "76",
      "77",
      "fizz",
      "79",
      "buzz",
      "fizz",
      "82",
      "fizz",
      "fizz",
      "buzz",
      "86",
      "fizz",
      "88",
      "89",
      "fizzbuzz",
      "91",
      "92",
      "fizz",
      "94",
      "buzz",
      "fizz",
      "97",
      "98",
      "fizz",
      "buzz",
    ];
    expect(fizzBuzz.fizzBuzz(100)).toEqual(returnData);
  });
});
