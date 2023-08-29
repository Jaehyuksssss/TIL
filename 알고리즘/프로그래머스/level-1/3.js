function solution(s) {
  let a = s.toUpperCase()
  let b = [...a]
  let Aarr = []
  let Barr = []
  let answer = []

  for (let i of b) {
    if (i === 'P') {
      Aarr.push(1)
    } else if (i === 'Y') {
      Barr.push(2)
    } else {
      null
    }
  }
  if (Aarr.length === Barr.length) {
    answer.push(true)
  } else {
    answer.push(false)
  }
  return answer[0]
}
