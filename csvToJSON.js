// CSV to JSON
var fs = require('fs');

function csvToJSON(line) {
  var arrVersion = line.split(',');
  var head = arrVersion[0].toString();
  console.log(head);
  var retObj = {};
  retObj[head] = arrVersion.slice(1);
  return retObj;
}

console.log(csvToJSON('WidgetsPerHour,5,6,3,2,4,4'));
