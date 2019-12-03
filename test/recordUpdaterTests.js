const chai = require('chai');
const assert = chai.assert;
const fs = require("fs");

const {currentBeverageDetail ,recordUpdater} = require("../src/recordUpdater");

describe("currentBeverageDetail", function() {
  it("it should make a correct object for given argument", function() {
    let time = "date1";
    let actual = currentBeverageDetail(
      ["-beverage", "watermelon", "- EmployID", "13984", "qty", "1"],
      time
    );
    let expected = {
      "--beverage": "watermelon",
      "--date": "date1",
      "--empId": "13984",
      "--qty": "1"
    };
    assert.deepStrictEqual(actual, expected);
  });
});

describe("record Updater", function() {
  let address = "./test/testing.json";
  it("should give write output for 1 st argument", function() {
    let userArgs = [
      "-beverage",
      "watermelon",
      "- EmployID",
      "13984",
      "qty",
      "1"
    ];
    let previousTransactions = [];
    let time = "date1";
    let actualValue = recordUpdater(
      userArgs,
      previousTransactions,
      address,
      time
    );
    let expectedValue = [
      {"--empId":"13984", "--beverage":"watermelon", "--qty":"1", "--date":"date1"}
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should give write output for  argument other than first command", function() {
    let userArgs = [
      "-beverage",
      "orange",
      "- EmployID",
      "13984",
      "qty",
      "1"
    ];
    let previousTransactions = [
      {"--empId":"13984", "--beverage":"watermelon", "--qty":"1", "--date":"date1"}
    ];
    let time = "date2";
    let actualValue = recordUpdater(
      userArgs,
      previousTransactions,
      address,
      time
    );
    let expectedValue = [
      {"--empId":"13984", "--beverage":"watermelon", "--qty":"1", "--date":"date1"},
      {"--empId":"13984", "--beverage":"orange", "--qty":"1", "--date":"date2"}
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should update record when there are some previous records.", function() {
    let userArgs = ["-beverage", "orange", "- EmployID", "139", "qty", "1"];
    let previousTransactions = [
      {"--empId":"13984", "--beverage":"watermelon", "--qty":"1", "--date":"date1"},
      {"--empId":"13984", "--beverage":"orange", "--qty":"1", "--date":"date2"}
    ];
    let time = "date3";
    let actualValue = recordUpdater(
      userArgs,
      previousTransactions,
      address,
      time
    );
    let expectedValue = [
      {"--empId":"13984", "--beverage":"watermelon", "--qty":"1", "--date":"date1"},
      {"--empId":"13984", "--beverage":"orange", "--qty":"1", "--date":"date2"},
      {"--empId":"139", "--beverage":"orange", "--qty":"1", "--date":"date3"}
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
    fs.unlinkSync(address);
  });
});
