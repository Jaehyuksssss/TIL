//문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let strArr = [...my_string]
  const strings = /[a-z]/i
  let sum = 0
  for (let i = 0; i < strArr.length; i++)
    if (!strings.test(strArr[i])) sum += parseInt(strArr[i])

  return sum
}
console.log(solution('aAb1B2cC34oOp'))
console.log(solution('1a2b3c4d123'))
