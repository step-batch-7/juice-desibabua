const chai = require("chai");
const assert = chai.assert;
const {
  messageForSave,
  messageForQuerry,
  concateWithNewLine
} = require("../src/messageFormater");

describe("messageForSave", function() {
  it("should give correct formate message for save option", function() {
    let time = new Date();
    let actualValue = messageForSave(
      ["--beverage", "orange", "--empId", "133", "--qty", "2"],
      time
    );
    let expectedValue = [
      "Transaction Recorded:",
      "Employee ID,Beverage,Quantity,Date",
      "133,orange,2," + time.toJSON()
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("messageForQuerry", function() {
  it("should give correct formate message for querry option with employ id for 1 juice", function() {
    let data = [
      {
        "--empId": "133",
        "--beverage": "orange",
        "--qty": "1",
        "--date": "2019-11-25T05:25:33.713Z"
      }
    ];
    let actualValue = messageForQuerry("random", "random", data);
    let expectedValue = [
      "Employee ID,Beverage,Quantity,Date",
      "133,orange,1,2019-11-25T05:25:33.713Z",
      "total: 1 Juice"
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should give correct formate message for querry option with employ id for more than 2 juices", function() {
    let data = [
      {
        "--empId": "133",
        "--beverage": "orange",
        "--qty": "2",
        "--date": "2019-11-25T05:25:33.713Z"
      },
      {
        "--empId": "133",
        "--beverage": "orange",
        "--qty": "2",
        "--date": "2019-11-25T05:25:40.675Z"
      }
    ];
    let actualValue = messageForQuerry("random", "random", data);
    let expectedValue = [
      "Employee ID,Beverage,Quantity,Date",
      "133,orange,2,2019-11-25T05:25:33.713Z",
      "133,orange,2,2019-11-25T05:25:40.675Z",
      "total: 4 Juices"
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("concater", function() {
  it("should concate strings in an array ", function() {
    let actualValue = concateWithNewLine(["hello", "world"], "\n");
    let expectedValue = "hello\nworld";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
