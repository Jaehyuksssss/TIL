// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let arr = my_string.split('')
  let answer = []

  for (let i = 0; i < arr.length; i++) {
    // 각 문자를 순회하면 확인
    if (arr[i] === arr[i].toUpperCase()) {
      // 해당 글자가 대문자면
      answer.push(arr[i].toLowerCase()) // 소문자로 바꾸어서 넣고
    } else {
      // 대문자가 아니라면, 소문자라면
      answer.push(arr[i].toUpperCase()) // 대문자로 바꾸어서 넣기
    }
  }

  return answer.join('')
}
