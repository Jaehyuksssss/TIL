function solution(num_list) {
  let arr = [];
  let answer = num_list[0];

  if (num_list.length >= 11) {
    for (let i = 1; i < num_list.length; i++) {
      answer += num_list[i];
    }

    return answer;
  }

  for (let i = 1; i < num_list.length; i++) {
    answer *= num_list[i];
    console.log(answer);
  }

  return answer;
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));

//리스트 길이가 11이상이면 모든 원소의 합
// 리스트 길이가 11이하이면 모든 원소의 곱
