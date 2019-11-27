const assert = require("assert");
const transactionDetail = require("../src/transactionChecker.js")
  .transactionDetail;

describe("transactionDetail", function() {
  it("should find transactions of a given employ", function() {
    let transactions = [
      { empId: "138", date: "2019-11-27T08:52:25.885Z" },
      { empId: "324", date: "2019-11-24T08:52:25.885Z" },
      { empId: "138", date: "2019-11-23T08:52:25.885Z" }
    ];
    let actualValue = transactionDetail(["empId", "138"], transactions);
    let expectedValue = [
      { empId: "138", date: "2019-11-27T08:52:25.885Z" },
      { empId: "138", date: "2019-11-23T08:52:25.885Z" }
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should find transactions of a given employ", function() {
    let transactions = [
      { empId: "138", date: "2019-11-27T08:52:25.885Z" },
      { empId: "324", date: "2019-11-24T08:52:25.885Z" },
      { empId: "138", date: "2019-11-23T08:52:25.885Z" }
    ];
    let actualValue = transactionDetail(
      ["empId", "138", "date", "2019-11-27"],
      transactions
    );
    let expectedValue = [{ empId: "138", date: "2019-11-27T08:52:25.885Z" }];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
