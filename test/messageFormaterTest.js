const assert = require("assert");
const messageForSave = require("../src/messageFormater").messageForSave;
const messageForQuerry = require("../src/messageFormater").messageForQuerry;
const concater = require("../src/messageFormater").concater;

describe("messageForSave", function() {
  it("should give correct formate message for save option", function() {
    let actualValue = messageForSave(
      ["-beverage", "orange", "-EmployID", "133", "qty", "2"],
      "time1"
    );
    let expectedValue = [
      "Transaction Recorded:",
      "Employee ID,Beverage,Quantity,Date",
      "133,orange,2,time1"
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("messageForQuerry", function() {
  it("should give correct formate message for querry option", function() {
    let data = [
      ["133", "orange", "2", "2019-11-25T05:25:33.713Z"],
      ["133", "orange", "2", "2019-11-25T05:25:40.675Z"]
    ];
    let actualValue = messageForQuerry("random", "random", data);
    let expectedValue = [
      "Employee ID, Beverage, Quantity, Date",
      "133,orange,2,2019-11-25T05:25:33.713Z",
      "133,orange,2,2019-11-25T05:25:40.675Z"
    ];
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});

describe("concater", function() {
  it("should concate strings in an array ", function() {
    let actualValue = concater(["hello", "world"], "\n");
    let expectedValue = "hello\nworld";
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
