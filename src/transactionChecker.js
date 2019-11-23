const fs = require('fs')

const transactionDetail = function (args, transactions) {
  employ = args[1]
  const employData = transactions[employ];
  return employData;
};

exports.transactionDetail = transactionDetail;