const previousTransactions = function(address, isFileExist, reader, encoder) {
  if (isFileExist(address)) {
    let previousRecords = reader(address, encoder);
    return JSON.parse(previousRecords);
  }
  return [];
};

const finalDataWriter = function(address, input,writer) {
  const datatoWrite = JSON.stringify(input, null, 2);
  writer(address, datatoWrite);
  return true;
};

module.exports = {previousTransactions,finalDataWriter};