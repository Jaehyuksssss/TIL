//옹알이

function solution(babbling) {
  var babblingArr = ['aya', 'ye', 'woo', 'ma']
  var word = ''
  var answer = 0

  for (var i = 0; i < babbling.length; i++) {
    word = babbling[i].toString()

    for (var j = 0; j < babblingArr.length; j++) {
      word = word.replaceAll(babblingArr[j], ' ')
    }

    if (word.trim().length == 0) {
      answer++
    }
  }

  return answer
}

console.log(solution(['aya', 'yee', 'u', 'maa', 'wyeoo']))
console.log(solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa']))
