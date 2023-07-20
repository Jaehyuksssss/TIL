{
  //array
  const fruits: string[] = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3, 4];

  function printArray(fruits: readonly string[]) {
    // fruits.push("s"); read only를 사용하면 주어진 데이터를 변경 할 수 없음
    //readonly Array<string> 불가

    //tuple 인덱스로 접근하는것이 가독성에 좋지 않아 권장하지 않음 -> interface , type alias , class로 대체해서 쓰는게 맞음
    let student: [string, number];
    student = ["name", 123];
    student[0]; //name
    student[1]; //123

    const [name, age] = student; //object distructing
    //react의 useState => 튜플을 사용한 예시

    /**
    function useState<S>(
      initialState: S | (() => S)
    ): [S, Dispatch<SetStateAction<S>>];
    // convenience overload when first argument is omitted
     */
  }
}
