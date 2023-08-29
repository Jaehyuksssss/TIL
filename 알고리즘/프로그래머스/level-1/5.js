// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

function solution(n) {
  let a = '수'
  let b = '박'
  let arr = []
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 1) {
      arr.push(a)
    } else arr.push(b)
  }
  return arr.join('')
}
