const assert = require("assert");
const fs = require("fs");

const currentBeverageDetail = require("../src/recordUpdater")
  .currentBeverageDetail;
const recordUpdater = require("../src/recordUpdater").recordUpdater;

describe("currentBeverageDetail", function() {
  it("it should make a correct object for given argument", function() {
    let time = "date1";
    let actual = currentBeverageDetail(
      ["-beverage", "watermelon", "- EmployID", "13984", "qty", "1"],
      time
    );
    let expected = { beverage: "watermelon", qty: "1", time: "date1" };
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
    let previousData = {};
    let time = "date1";
    let actualValue = recordUpdater(userArgs, previousData, address, time);
    let expectedValue = {
      "13984": [{ beverage: "watermelon", qty: "1", time: "date1" }]
    };
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should give write output for  argument other than first command", function() {
    let userArgs = [
      "-beverage",
      "watermelon",
      "- EmployID",
      "13984",
      "qty",
      "1"
    ];
    let previousData = {
      "13984": [{ beverage: "watermelon", qty: "1", time: "date1" }]
    };
    let time = "date2";
    let actualValue = recordUpdater(userArgs, previousData, address, time);
    let expectedValue = {
      "13984": [
        { beverage: "watermelon", qty: "1", time: "date1" },
        { beverage: "watermelon", qty: "1", time: "date2" }
      ]
    };
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should update record when there are some previous records.", function() {
    let userArgs = ["-beverage", "orange", "- EmployID", "139", "qty", "1"];
    let previousData = {
      "13984": [
        { beverage: "watermelon", qty: "1", time: "date1" },
        { beverage: "watermelon", qty: "1", time: "date2" }
      ]
    };
    let time = "date3";
    let actualValue = recordUpdater(userArgs, previousData, address, time);
    let expectedValue = {
      "13984": [
        { beverage: "watermelon", qty: "1", time: "date1" },
        { beverage: "watermelon", qty: "1", time: "date2" }
      ],
      "139": [{ beverage: "orange", qty: "1", time: "date3" }]
    };
    assert.deepStrictEqual(actualValue, expectedValue);
    fs.writeFileSync(address, "", "utf8");
  });
});
