const fs = require("fs");

const transactionDetail = function(userArgs, transactions) {
  employId = userArgs[1];
  const employTransactions = transactions[employId];
  return employTransactions;
};

exports.transactionDetail = transactionDetail;
