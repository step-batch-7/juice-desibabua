const assert = require("chai").assert;
const { getDate, getPath } = require("../src/config");

describe("getPath", function() {
  it("should give default Path when env has not any predefined path", function() {
    const env = {};
    let actualValue = getPath(env);
    let expectedValue = "./beverageRecord.JSON";
    assert.strictEqual(actualValue, expectedValue);
  });

  it("should give env Path when env has any predefined path", function() {
    const env = { path: "anyPath" };
    let actualValue = getPath(env);
    let expectedValue = "anyPath";
    assert.strictEqual(actualValue, expectedValue);
  });
});

describe("getDate", function() {
  it("should give default date when env has not any predefined date", function() {
    const env = {};
    let actualValue = getDate(env);
    let expectedValue = new Date();
    assert.deepStrictEqual(actualValue, expectedValue);
  });

  it("should give env date when env has any predefined date", function() {
    const env = { date: "2019-12-02T09:41:43.333Z" };
    let actualValue = getDate(env);
    let expectedValue = new Date("2019-12-02T09:41:43.333Z");
    assert.deepStrictEqual(actualValue, expectedValue);
  });
});
