// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// 입력
// 첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

// 출력
// 첫째 줄에 A+B를 출력한다.

// 예제 입력 1
// 1 2

const fs = require("fs");

function main(num) {
  const arr1 = num.split(" ");
  const a = parseInt(arr1[0], 10);
  const b = parseInt(arr1[1], 10);

  console.log(a + b);
}

const inputData1 = fs.readFileSync("/dev/stdin").toString();
main(1, 2);
