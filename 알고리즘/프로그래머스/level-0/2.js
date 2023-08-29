function solution(s) {
  var arr = []
  arr = s.split('')
  
  var sum = 0
  for (let i = 0; i < arr.length; i++){
    if (sum < 0) {
      return false
    }
    if (arr[i] === ‘(’)) {
      sum = sum + 1
    } else
      sum = sum - 1
  }
  return Boolean(sum===0&&arr[0]===‘(’&&arr[arr.length-1]===‘)’);
