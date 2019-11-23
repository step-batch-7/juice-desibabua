const assert = require('assert');
const optionChecker = require('../src/optionChecker.js').optionChecker;
const recordUpdater = require('../src/recordUpdater.js').recordUpdater;
const transactionDetail = require('../src/transactionChecker.js').transactionDetail;
const wrongInput = require('../src/optionChecker.js').wrongInput;

describe('optionChecker', function () {
  describe('should give function reference', function () {
    it('should return recordUpdater for option(--save)', function () {
      assert.strictEqual(optionChecker("--save"), recordUpdater);
    });
    it('should return transactionDetail for option(--query)', function () {
      assert.strictEqual(optionChecker("--query"), transactionDetail);
    });
    it('should return wrongInput for option as any random value', function () {
      assert.strictEqual(optionChecker("asdfh"), wrongInput);
    });
  });
});