const fs = require("fs");

const previousData = function(address) {
  if (!fs.existsSync(address)) {
    return {};
  }
  let previousRecords = fs.readFileSync(address, "utf8");
  return JSON.parse(previousRecords);
};

const finalDataWriter = function(address, input) {
  const datatoWrite = JSON.stringify(input);
  fs.writeFileSync(address, datatoWrite);
};

exports.previousData = previousData;
exports.finalDataWriter = finalDataWriter;
