직육면체 안에 들어가는 모서리가 n인 정육면체가 최대 몇개 들어가는지? 

function solution(box, n) {
    let answer = box.map((x) => ~~(x/n)).reduce((acc, cur) => acc * cur);
    return answer;
}

~~ => 물결 연산자는 Math.floor()와 같게 쓰임

소수점을 다 버리고 정수로 되어버린다.