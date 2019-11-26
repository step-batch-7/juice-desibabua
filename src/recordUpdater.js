const fs = require("fs");
const finalDataWriter = require("./fileReaderAndWriter").finalDataWriter;

const currentBeverageDetail = function(userArgs, currentTime) {
  let detail = [];
  detail.push(userArgs[3]);
  detail.push(userArgs[1]);
  detail.push(userArgs[5]);
  detail.push(currentTime);
  return detail;
};

const recordUpdater = function(userArgs, previousTransactionOfEmploy, address, currentTime) {
  const currentTransactionsOfEmploy = previousTransactionOfEmploy;
  if (!Object.keys(currentTransactionsOfEmploy).includes(userArgs[3])) {
    currentTransactionsOfEmploy[userArgs[3]] = [];
  }
  currentTransactionsOfEmploy[userArgs[3]].push(currentBeverageDetail(userArgs, currentTime));
  let finalData = currentTransactionsOfEmploy;
  finalDataWriter(address, finalData, fs.writeFileSync);
  return currentTransactionsOfEmploy;
};

exports.currentBeverageDetail = currentBeverageDetail;
exports.recordUpdater = recordUpdater;
