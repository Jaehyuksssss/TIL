// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 1차시도
function solution(a, b) {
  const answer = [];
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    answer.push(a[i] * b[i]);
  }
  answer.forEach(function (item) {
    sum += item;
  });
  return sum;
}

//2차시도
a.map((item, index) => item * b[index]).reduce((acc, cur) => acc + cur, 0);

// 메모리는 똑같으나 시간 복잡도는 2번이 더 빠름
