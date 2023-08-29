// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  return Array.from({ length: n }, (_, x) => x + 1).filter((v) => v % 2 !== 0)
}
console.log(solution(15))
