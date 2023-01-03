// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("encoding a message", () => {
  it("should encode message, 'Zebra Magazine' by shift of 3", () => {
    const message = "Zebra Magazine";
    const shift = 3;
    const actual = caesar(message, shift);
    const expected = "cheud pdjdclqh";

    expect(actual).to.equal(expected);
  });
})


