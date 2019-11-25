const fs = require("fs");

const optionChecker = require("./src/optionChecker").optionChecker;
const previousData = require("./src/fileReaderAndWriter.js").previousData;
const concater = require("./src/messageFormater").concater;

const main = function() {
  const options = process.argv[2];
  const userArgs = process.argv.slice(3);
  const addres = "./src/beverageRecord.JSON";
  const initialInput = previousData(addres);
  const workToDo = optionChecker(options);
  const time = new Date().toJSON();
  let data = workToDo[0](userArgs, initialInput, addres, time);
  console.log("value of Data : ", data);
  console.log("value of userArgs : ", userArgs);
  let finalMessage = workToDo[1](userArgs, time, data);
  console.log(concater(finalMessage, "\n"));
};

main();
