const currentBeverageDetail = require("./recordUpdater").currentBeverageDetail;

const messageForSave = function(userArgs, time) {
  let message = ["Transaction Recorded:", "Employee ID,Beverage,Quantity,Date"];
  let currentMessage = currentBeverageDetail(userArgs, time);
  currentMessage = currentMessage.toString();
  message.push(currentMessage);
  return message;
};

const messageForQuerry = function(userArgs, time, Data) {
  let message = ["Employee ID, Beverage, Quantity, Date"];
  let transOfGivenEmploy = Data.reduce(function(
    initialmessage,
    currentTransaction
  ) {
    initialmessage.push(currentTransaction.toString());
    return initialmessage;
  },
  message);
  return message;
};

const concater = function(array, joiner) {
  return array.join(joiner);
};

exports.messageForSave = messageForSave;
exports.messageForQuerry = messageForQuerry;
exports.concater = concater;
