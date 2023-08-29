function solution(my_string, num1, num2) {
  let answer = Array.from(my_string);
  answer.splice(num1, 1, my_string[num2]);
  answer.splice(num2, 1, my_string[num1]);
  return answer.join("");
}

//num1,num2의 해당 인데스의 문자 바꾸기
