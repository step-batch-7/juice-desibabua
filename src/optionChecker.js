const recordUpdater = require('./recordUpdater.js').recordUpdater
const transactionDetail = require('./transactionChecker.js').transactionDetail
const wrongInput = require('./recordUpdater.js').wrongInput

const optionChecker = function (options) {
  if (options == "--save") {
    return recordUpdater;
  }
  if (options == "--query") {
    return transactionDetail;
  }
  return wrongInput;
};

exports.optionChecker = optionChecker;