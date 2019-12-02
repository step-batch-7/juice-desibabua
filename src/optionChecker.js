const recordUpdater = require("./recordUpdater.js").recordUpdater;
const transactionDetail = require("./transactionChecker.js").transactionDetail;
const messageForSave = require("./messageFormater").messageForSave;
const messageForQuerry = require("./messageFormater").messageForQuerry;

const optionChecker = function(option) {
  let optionTypes = {};
  optionTypes["--save"] = [recordUpdater, messageForSave];
  optionTypes["--query"] = [transactionDetail, messageForQuerry];
  const operations = optionTypes[option];
  if (operations) {
    return operations;
  }
  return [wrongInput, wrongInput];
};

const wrongInput = function() {
  return [`you have written a wrong option`];
};

module.exports = { optionChecker, wrongInput };