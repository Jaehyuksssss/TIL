// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 입출력 예
// n	return
// 12	28
// 5	6

function solution(n) {
  let arr = []

  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      arr.push(i)
    } else {
      null
    }
  }

  let sum = 0
  arr.forEach((n) => {
    sum += n
  })
  return sum
}
