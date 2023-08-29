//연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  let startNum = 0;
  // 초반 [0~num]의 배열을 생성
  let twoPointer = new Array(num)
    .fill(0)
    .map((a, i) => i)
    .reduce((a, b) => a + b, 0);
  // 배열이 total과 같아질 때까지 반복
  while (twoPointer !== total) {
    // 현재 배열의 합이 total보다 작다면 +1
    if (twoPointer < total) {
      startNum++;
      // 크다면 -1
    } else {
      startNum--;
    }
    // 변경된 startNum에 따른 배열의 합 계산
    twoPointer = new Array(num)
      .fill(0)
      .map((a, i) => i + startNum)
      .reduce((a, b) => a + b, 0);
  }
  return new Array(num).fill(0).map((a, i) => i + startNum);
}
