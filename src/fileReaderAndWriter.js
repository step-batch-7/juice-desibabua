const fs = require('fs')

const previousData = function (address) {
  let previousRecords = fs.readFileSync(address, 'utf8')
  if (previousRecords.length === 0) {
    previousRecords = "{}"
  }
  previousRecords = JSON.parse(previousRecords)
  return previousRecords;
};

const finalDataWriter = function (address, input) {
  const datatoWrite = JSON.stringify(input)
  fs.writeFileSync(address, datatoWrite)
}

exports.previousData = previousData;
exports.finalDataWriter = finalDataWriter;