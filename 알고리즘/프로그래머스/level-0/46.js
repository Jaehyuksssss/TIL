// 분수의 덧셈
// 문제 설명
// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(numer1, denom1, numer2, denom2) {
	let arr =[]
  let a = 1;
 while(true){
       if((a % denom1 == 0) && (a % denom2 == 0)){
         break;
       }
       a++;
     }

  	arr.push((a/denom1*numer1)+(a/denom2*numer2),a)
  
    return arr
}
1차 시도 틀렸음 (답은 맞음)
 denom1과 2의 최소 공배수를 구한뒤 a를 denom1 로 나눈거에 num1을 곱한것과
 a를 denom2 로 나눈거에 num2을 곱한것을 더하는 식으로 구하려고 했음

 2차 시도 
 function solution(denum1, num1, denum2, num2) {
    // 1. 두 분모의 최소공배수를 공통분모로 하여 값을 계산한다.
    const getGCD = (a, b) => (b ? getGCD(b, a % b) : a);
    const getLCM = (a, b) => (a * b) / getGCD(a, b);
    const lcm = getLCM(num1, num2);

    let numerator = (denum1 * lcm) / num1 + (denum2 * lcm) / num2;
    let denominator = lcm;

    // 2. 분자와 분모의 최대공약수를 구하여 값을 나눈다.
    const gcd = getGCD(numerator, denominator);
    numerator /= gcd;
    denominator /= gcd;

    return [numerator, denominator];
}
