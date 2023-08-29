// 문제 설명
// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers, direction) {
  direction === "right"
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
console.log(solution([1, 2, 3], "right"));
console.log(solution([4, 455, 6, 4, -1, 45, 6], "left"));

// arr.push() : 제일 뒤에 추가 / 배열 자체 수정 / 수정된 배열의 길이 리턴
// arr.unshift() : 제일 앞에 추가 / 배열 자체 수정 / 수정된 배열 길이 리턴
// arr.pop() : 제일 뒤의 아이템 제거 / 배열 자체 수정 / 잘라낸 아이템 리턴
// arr.shift() : 제일 앞의 아이템 제거 / 배열 자체 수정 / 잘라낸 아이템 리턴
