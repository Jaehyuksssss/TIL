function solution(array) {
  let answer = []

  let maxIndex = 0
  for (let i = 1; i < array.length; i++) {
    maxIndex = array[maxIndex] > array[i] ? maxIndex : i
  }

  answer.push(array[maxIndex])
  answer.push(maxIndex)
  return answer
}
