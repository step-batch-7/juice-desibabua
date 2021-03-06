const currentBeverageDetail = require("./recordUpdater").currentBeverageDetail;

const header = function() {
  return `Employee ID,Beverage,Quantity,Date`;
};

const messageForSave = function(userArgs, time) {
  let messageToDisplay = [`Transaction Recorded:`, header()];
  let currentTransaction = currentBeverageDetail(userArgs, time);
  let currentMessage = [
    currentTransaction["--empId"],
    currentTransaction["--beverage"],
    currentTransaction["--qty"],
    currentTransaction["--date"].toJSON()
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
    return +element["--qty"] + total;
  }, 0);
  let suffixOfJuice = totalDrinks<2 ? "Juice":"Juices"
  messageToDisplay.push(`total: ${totalDrinks} ${suffixOfJuice}`);
  messageToDisplay.unshift(header());
  return messageToDisplay;
};

const concateWithNewLine = function(arrayOfStrings, joiner) {
  return arrayOfStrings.join(joiner);
};

module.exports = {messageForSave,messageForQuerry,concateWithNewLine};