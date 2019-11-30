const currentBeverageDetail = require("./recordUpdater").currentBeverageDetail;

const header = function() {
  return `Employee ID,Beverage,Quantity,Date`;
};

const messageForSave = function(userArgs, time) {
  let messageToDisplay = [`Transaction Recorded:`, header()];
  let currentTransaction = currentBeverageDetail(userArgs, time);
  let currentMessage = [
    currentTransaction.empId,
    currentTransaction.beverage,
    currentTransaction.qty,
    currentTransaction.date.toJSON()
  ];
  currentMessage = currentMessage.toString();
  messageToDisplay.push(currentMessage);
  return messageToDisplay;
};

const messageForQuerry = function(userArgs, time, data) {
  let messageToDisplay = [];
  data.reduce(function(initialmessage, currentTransaction) {
    initialmessage.push(Object.values(currentTransaction).toString());
    return initialmessage;
  }, messageToDisplay);
  let totalDrinks = data.reduce(function(total, element) {
    return +element.qty + total;
  }, 0);
  messageToDisplay.push(`total: ${totalDrinks} Juices`);
  messageToDisplay.unshift(header());
  return messageToDisplay;
};

const concateWithNewLine = function(arrayOfStrings, joiner) {
  return arrayOfStrings.join(joiner);
};

exports.messageForSave = messageForSave;
exports.messageForQuerry = messageForQuerry;
exports.concateWithNewLine = concateWithNewLine;
