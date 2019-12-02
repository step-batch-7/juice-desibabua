const filterer = function(key, value) {
  return function(element) {
    return (
      element[key] == value ||
      new Date(element.date).toJSON().slice(0, 10) == value
    );
  };
};

const transactionDetail = function(userArgs, transactions) {
  let filteredTransactions = transactions
  for(let idx = 0;idx<userArgs.length;idx+=2){
    let filterAccordingtoFields = filterer(userArgs[idx],userArgs[idx+1]);
    filteredTransactions = filteredTransactions.filter(filterAccordingtoFields)
  }
  return filteredTransactions
};

exports.transactionDetail = transactionDetail;
