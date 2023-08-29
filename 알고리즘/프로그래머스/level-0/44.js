// 최댓값 만들기 (2)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let arr = []
  const sortArr = numbers.sort((a, b) => a - b)

  sortArr[0] * sortArr[1] >
  sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2]
    ? arr.push(sortArr[0] * sortArr[1])
    : arr.push(sortArr[sortArr.length - 1] * sortArr[sortArr.length - 2])

  return Number(arr)
}
