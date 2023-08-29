const fs = require("fs");

function main(num) {
  const arr1 = num.split(" ");
  const a = parseInt(arr1[0], 10);
  const b = parseInt(arr1[1], 10);
  console.log(a - b);
}

const inputData1 = fs.readFileSync("/dev/stdin").toString();
main(inputData1);
