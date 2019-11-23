const assert = require('assert');
const currentBeverageDetail = require('../src/recordUpdater').currentBeverageDetail;

describe('currentBeverageDetail', function () {
  it('it should make a correct object for given argument', function () {
    let actual = currentBeverageDetail(["-beverage", "watermelon", "- EmployID", "13984", "qty", "1"]);
    let expected = { beverage: "watermelon", qty: "1", time: (new Date()) }
    assert.deepStrictEqual(actual, expected);
  });
});

