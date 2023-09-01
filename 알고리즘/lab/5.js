//345와 456이 주어질때
//      345
//    x 456
//    ---------
//    12070 --- 1
//    1725  --- 2
//   1380   --- 3
// ---------------
// 157320   --- 4
//1,2,3,4를 구하야라

function solution(x, y) {
  const strB = String(y);
  let b = Array.from(strB);

  b_1 = b[2];
  b_2 = b[1];
  b_3 = b[0];

  console.log(Number(x) * Number(b_1));
  console.log(Number(x) * Number(b_2));
  console.log(Number(x) * Number(b_3));
  console.log(Number(x) * Number(y));
}

console.log(solution(345, 456));
