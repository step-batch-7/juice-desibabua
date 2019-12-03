const fs = require("fs");
const finalDataWriter = require("./fileReaderAndWriter").finalDataWriter;

const currentBeverageDetail = function(userArgs, currentTime) {
  let detail = {};
  detail["--empId"] = userArgs[userArgs.lastIndexOf("--empId")+1];
  detail["--beverage"] = userArgs[userArgs.lastIndexOf("--beverage")+1];
  detail["--qty"] = userArgs[userArgs.lastIndexOf("--qty")+1];
  detail["--date"] = currentTime;
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