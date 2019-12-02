const fs = require("fs");
const finalDataWriter = require("./fileReaderAndWriter").finalDataWriter;

const currentBeverageDetail = function(userArgs, currentTime) {
  let detail = {};
  detail.empId = userArgs[3];
  detail.beverage = userArgs[1];
  detail.qty = userArgs[5];
  detail.date = currentTime;
  return detail;
};

const recordUpdater = function(
  userArgs,
  previousTransactionOfEmploy,
  address,
  currentTime
) {
  const currentTransactionsOfEmploy = previousTransactionOfEmploy;
  currentTransactionsOfEmploy.push(
    currentBeverageDetail(userArgs, currentTime)
  );
  let finalData = currentTransactionsOfEmploy;
  finalDataWriter(address, finalData, fs.writeFileSync);
  return currentTransactionsOfEmploy;
};

module.exports= {currentBeverageDetail,recordUpdater};