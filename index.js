const { reconfigureWindow } = require("jsdom");


// code your solution here

function superbowlWin(record) {
    const result = record.find((currentRecord) => {
      return currentRecord.result === "W";
    });
    if (result) {
      return result.year;
    }
    return undefined;
  }