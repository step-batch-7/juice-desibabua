const recordUpdater = require("./recordUpdater.js").recordUpdater;
const transactionDetail = require("./transactionChecker.js").transactionDetail;
const messageForSave = require("./messageFormater").messageForSave;
const messageForQuerry = require("./messageFormater").messageForQuerry;

const optionChecker = function(options) {
  if (options == "--save") {
    return [recordUpdater, messageForSave];
  }
  if (options == "--query") {
    return [transactionDetail, messageForQuerry];
  }
  return [wrongInput, wrongInput];
};

const wrongInput = function() {
  return ["you have written a wrong option"];
};

exports.optionChecker = optionChecker;
exports.wrongInput = wrongInput;
