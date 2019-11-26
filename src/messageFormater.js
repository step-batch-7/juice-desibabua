const currentBeverageDetail = require("./recordUpdater").currentBeverageDetail;

const header = function(){
  return "Employee ID,Beverage,Quantity,Date";
}

const messageForSave = function(userArgs, time) {
  let message = ["Transaction Recorded:", header()];
  let currentMessage = currentBeverageDetail(userArgs, time);
  currentMessage = currentMessage.toString();
  message.push(currentMessage);
  return message;
};

const messageForQuerry = function(userArgs, time, data) {
  let message = [];
  let transOfGivenEmploy = data.reduce(function(
    initialmessage,
    currentTransaction
  ) {
    initialmessage.push(currentTransaction.toString());
    return initialmessage;
  },
  message);
  // return message;
  let dataToPrint = message.slice();
  let totalDrinks = dataToPrint.reduce(function(total, element) {
    element1 = element.split(",");
    return +element1[2] + total;
  }, 0);
  message.push("total drinks :" + totalDrinks);
  message.unshift(header())
  return message;
};

const concater = function(array, joiner) {
  return array.join(joiner);
};

exports.messageForSave = messageForSave;
exports.messageForQuerry = messageForQuerry;
exports.concater = concater;
