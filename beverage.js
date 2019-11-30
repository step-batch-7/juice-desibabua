const fs = require("fs");

const optionChecker = require("./src/optionChecker").optionChecker;
const previousTransactions = require("./src/fileReaderAndWriter.js")
  .previousTransactions;
const concateWithNewLine = require("./src/messageFormater").concateWithNewLine;

const main = function() {
  const dtime = process.env.date || new Date().toJSON();
  const time = new Date(dtime);
  const options = process.argv[2];
  const userArgs = process.argv.slice(3);
  const addres = process.env.path || "./src/beverageRecord.JSON";
  const initialInput = previousTransactions(
    addres,
    fs.existsSync,
    fs.readFileSync,
    "utf8"
  );
  const workToDo = optionChecker(options);
  let transactionsOfGivenEmploy = workToDo[0](
    userArgs,
    initialInput,
    addres,
    time
  );
  let finalMessage = workToDo[1](userArgs, time, transactionsOfGivenEmploy);
  console.log(concateWithNewLine(finalMessage, "\n"));
};

main();
