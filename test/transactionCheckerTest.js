const assert = require("assert");
const transactionDetail = require("../src/transactionChecker.js")
  .transactionDetail;

describe("transactionDetail", function() {
  it("should find transactions of a given employ", function() {
    let actualValue = transactionDetail(["employ", "138"], {
      138: [{ beverage: "orange" }]
    });
    let expectedValue = [{ beverage: "orange" }];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
