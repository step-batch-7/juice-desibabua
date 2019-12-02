const chai = require("chai");
const assert = chai.assert;
const { optionChecker, wrongInput } = require("../src/optionChecker.js");
const { messageForSave, messageForQuerry } = require("../src/messageFormater");
const { recordUpdater } = require("../src/recordUpdater.js");
const { transactionDetail } = require("../src/transactionChecker.js");

describe("optionChecker", function() {
  describe("should give function reference", function() {
    it("should return recordUpdater for option(--save)", function() {
      assert.deepStrictEqual(optionChecker("--save"), [
        recordUpdater,
        messageForSave
      ]);
    });
    it("should return transactionDetail for option(--query)", function() {
      assert.deepStrictEqual(optionChecker("--query"), [
        transactionDetail,
        messageForQuerry
      ]);
    });
    it("should return wrongInput for option as any random value", function() {
      assert.deepStrictEqual(optionChecker("asdfh"), [wrongInput, wrongInput]);
    });
  });
});

describe("messageForWrongOption", function() {
  it("should give correct message for wrong Options", function() {
    let actualValue = wrongInput();
    let expectedValue = ["you have written a wrong option"];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
