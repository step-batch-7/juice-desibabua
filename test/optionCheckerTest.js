const chai = require('chai');
const assert = chai.assert;
const optionChecker = require("../src/optionChecker.js").optionChecker;
const wrongInput = require("../src/optionChecker.js").wrongInput;
const messageForSave = require("../src/messageFormater").messageForSave;
const messageForQuerry = require("../src/messageFormater").messageForQuerry;
const recordUpdater = require("../src/recordUpdater.js").recordUpdater;
const transactionDetail = require("../src/transactionChecker.js")
  .transactionDetail;

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
