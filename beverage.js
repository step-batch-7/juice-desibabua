const fs = require("fs");

const optionChecker = require("./src/optionChecker").optionChecker;
const previousTransactions = require("./src/fileReaderAndWriter.js")
  .previousTransactions;
const concateWithNewLine = require("./src/messageFormater").concateWithNewLine;
const { getDate ,getPath} = require("./src/config");

const main = function() {
  const time = getDate(process.env);
  const options = process.argv[2];
  const userArgs = process.argv.slice(3);
  const address = getPath(process.env)
  const initialInput = previousTransactions(
    address,
    fs.existsSync,
    fs.readFileSync,
    "utf8"
  );
  const workToDo = optionChecker(options);
  let transactionsOfGivenEmploy = workToDo[0](
    userArgs,
    initialInput,
    address,
    time
  );
  let finalMessage = workToDo[1](userArgs, time, transactionsOfGivenEmploy);
  console.log(concateWithNewLine(finalMessage, "\n"));
};

main();
