const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding a message", () => {
    it("should encode 'message'", () => {
      const message = "message";
      const actual = polybius(message);
      const expected = "23513434112251";

      expect(actual).to.equal(expected);
    })
})