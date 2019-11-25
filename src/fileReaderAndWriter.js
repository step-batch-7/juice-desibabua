const fs = require("fs");

const previousData = function(address) {
  let previousRecords = fs.readFileSync(address, "utf8");
  if (previousRecords.length === 0) {
    previousRecords = "{}";
  }
  return JSON.parse(previousRecords);
};

const finalDataWriter = function(address, input) {
  const datatoWrite = JSON.stringify(input, null, 2);
  fs.writeFileSync(address, datatoWrite);
};

exports.previousData = previousData;
exports.finalDataWriter = finalDataWriter;
