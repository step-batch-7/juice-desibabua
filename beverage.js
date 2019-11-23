const fs = require('fs')

const optionChecker = require('./src/optionChecker').optionChecker;
const previousData = require('./src/fileReaderAndWriter.js').previousData;

const main = function () {
  const options = process.argv[2];
  const userArgs = (process.argv).slice(3)
  console.log(previousData)
  const addres = './src/beverageRecord.JSON'
  const initialInput = previousData(addres)
  const workToDo = optionChecker(options)
  console.log(workToDo(userArgs, initialInput, addres))
};

main();
