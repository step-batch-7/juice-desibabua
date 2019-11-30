const filterer = function(key, value) {
  return function(element) {
    return (
      element[key] == value ||
      new Date(element.date).toJSON().slice(0, 10) == value
    );
  };
};

const transactionDetail = function(userArgs, transactions) {
  const filterWithFirstArgument = filterer(userArgs[0], userArgs[1]);
  let filteredTransactions = transactions.filter(filterWithFirstArgument);
  if (userArgs.length <= 2) {
    return filteredTransactions;
  }
  filterWithSecondArgument = filterer(userArgs[2], userArgs[3]);
  filteredTransactions = filteredTransactions.filter(filterWithSecondArgument);
  if (userArgs.length <= 4) {
    return filteredTransactions;
  }
  filterWithSecondArgument = filterer(userArgs[4], userArgs[5]);
  filteredTransactions = filteredTransactions.filter(filterWithSecondArgument);
  return filteredTransactions;
};

exports.transactionDetail = transactionDetail;
