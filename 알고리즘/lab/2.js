// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  let answer = ''
  const MaxN = A.map((v) => v.split(''))
    .flat()
    .filter((v) => /[0-9]/.test(v))
    .map((v) => parseInt(v))
    .sort((a, b) => b - a)[0]
  const clearA = [...A]
  for (let i = 0; i < A.length; i++) {
    clearA.push(A[i].split('').reverse().join(''))
  }
  for (let j = 0; j < MaxN; j++) {
    if (answer !== '') break
    for (let k = 0; k < MaxN; k++) {
      const findStr = `${j}-${k}`
      if (clearA.findIndex((v) => v === findStr) === -1) {
        answer = findStr
        break
      }
    }
  }
  return answer
}
