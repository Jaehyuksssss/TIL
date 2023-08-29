// reverse 함수에 정수인 숫자를 인자로 받습니다.
// 그 숫자를 뒤집어서 return해주세요.

// x: 숫자
// return: 뒤집어진 숫자를 반환!

// 예들 들어,
// x: 1234
// return: 4321

// x: -1234
// return: -4321

// x: 1230
// return: 321

const reverse = (x) => {
  const reversedStr = Math.abs(x).toString().split('').reverse().join('')
  const reversedNum = Number(reversedStr)
  return x < 0 ? -reversedNum : reversedNum
}

console.log(reverse(1234))
console.log(reverse(-1234))
console.log(reverse(1230))
