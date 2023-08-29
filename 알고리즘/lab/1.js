function solution(k, arr) {
  let answer = 0,
    sum = 0
  for (let i = 0; i < k; i++) {
    sum += arr[i]
  }

  answer = sum

  for (let j = k; j < arr.length; j++) {
    sum = answer + (arr[k] - arr[j - k])
    answer = Math.max(answer, sum)
  }
}

// arr = [10, 20, 10, 15 ,20 ,15, 12];
// k = 3;

// k만큼 연속 수열일때 합이 제일 큰 수

console.log(solution(3, [10, 20, 10, 15, 20, 15, 12]))
