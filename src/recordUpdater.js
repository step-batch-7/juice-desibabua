const fs = require("fs");
const finalDataWriter = require("./fileReaderAndWriter").finalDataWriter;

const currentBeverageDetail = function(userArgs, time) {
  let detail = [];
  detail.push(userArgs[3]);
  detail.push(userArgs[1]);
  detail.push(userArgs[5]);
  detail.push(time);
  return detail;
};

const recordUpdater = function(userArgs, previousData, address, time) {
  const initialData = previousData;
  if (!Object.keys(initialData).includes(userArgs[3])) {
    initialData[userArgs[3]] = [];
  }
  initialData[userArgs[3]].push(currentBeverageDetail(userArgs, time));
  let finalData = initialData;
  finalDataWriter(address, finalData);
  return initialData;
};

exports.currentBeverageDetail = currentBeverageDetail;
exports.recordUpdater = recordUpdater;
