{
  /**
   * 알아서 자동으로 타입 추론 -> 안쓰는거 추천
   */
  let text = "hello";
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");
  function add2(x: number, y: number) {
    return x + y;
  }
  const result = add(1, 2);
  console.log(result);
}
