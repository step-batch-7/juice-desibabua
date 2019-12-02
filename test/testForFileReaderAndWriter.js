const chai = require("chai");
const assert = chai.assert;
const {
  previousTransactions,
  finalDataWriter
} = require("../src/fileReaderAndWriter");

describe("previous Data", function() {
  it("isExist false test", function() {
    const isExist = function(address) {
      assert.ok(address, "correctAddress");
      return false;
    };
    assert.deepStrictEqual(previousTransactions("correctAddress", isExist), []);
  });

  it("is Exist true test", function() {
    const isExist = function(address) {
      return true;
    };
    const reader = function(address, encoder) {
      assert.ok(address, "correctAddress");
      assert.ok(encoder, "correctEncoder");
      return '{"1":3}';
    };
    assert.deepStrictEqual(
      previousTransactions("correctAddress", isExist, reader, "correctEncoder"),
      { 1: 3 }
    );
  });
});

describe("finalDataWriter", function() {
  it("writer", function() {
    const writer = function(address, dataToWrite) {
      assert.ok(address, "correctAddress");
      assert.ok(dataToWrite, '{"1":2}');
    };
    assert.deepStrictEqual(
      finalDataWriter("correctAdd", { "1": 2 }, writer),
      true
    );
  });
});
