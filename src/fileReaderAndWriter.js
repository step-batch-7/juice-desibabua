const fs = require("fs");
const assert = require("assert");

const previousData = function(address, isExist, reader, encoder) {
  // if (fs.existsSync(address)) {
  if (isExist(address)) {
    let previousRecords = reader(address, encoder);
    return JSON.parse(previousRecords);
  }
  return {};
};

const finalDataWriter = function(address, input,writer) {
  const datatoWrite = JSON.stringify(input, null, 2);
  writer(address, datatoWrite);
  return true;
};

exports.previousData = previousData;
exports.finalDataWriter = finalDataWriter;
