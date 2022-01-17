//importing functions
const assert = require("chai").assert;
const tail = require("../tail");

//Test code
describe("#tail", () => {
  it('returns two elements for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it('ensure first element is "Lighthouse" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse"); 
  });
  it('ensure second element is "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
});