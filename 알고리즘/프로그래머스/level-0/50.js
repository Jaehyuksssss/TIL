function solution(num, k) {
  let arr = []
  let numArr = [num].join('').split('')
  numArr.filter((v) => {
    console.log(parseInt(v) === v.includes(k))
  })
}
console.log(solution(29183, 1))
console.log(solution(232443, 4))
console.log(solution(123456, -1))

// 숫자 찾기
