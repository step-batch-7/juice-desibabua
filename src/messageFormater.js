const currentBeverageDetail = require("./recordUpdater").currentBeverageDetail;

const header = function() {
  return "Employee ID,Beverage,Quantity,Date";
};

const messageForSave = function(userArgs, time) {
  let messageToDisplay = ["Transaction Recorded:", header()];
  let currentMessage = currentBeverageDetail(userArgs, time);
  currentMessage = currentMessage.toString();
  messageToDisplay.push(currentMessage);
  return messageToDisplay;
};

const messageForQuerry = function(userArgs, time, data) {
  let messageToDisplay = [];
  data.reduce(function(initialmessage, currentTransaction) {
    initialmessage.push(currentTransaction.toString());
    return initialmessage;
  }, messageToDisplay);
  let dataToPrint = messageToDisplay.slice();
  let totalDrinks = dataToPrint.reduce(function(total, element) {
    element1 = element.split(",");
    return +element1[2] + total;
  }, 0);
  messageToDisplay.push("total drinks :" + totalDrinks);
  messageToDisplay.unshift(header());
  return messageToDisplay;
};

const concateWithNewLine = function(arrayOfStrings, joiner) {
  return arrayOfStrings.join(joiner);
};

exports.messageForSave = messageForSave;
exports.messageForQuerry = messageForQuerry;
exports.concateWithNewLine = concateWithNewLine;
