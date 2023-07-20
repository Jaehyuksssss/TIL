{
  /**
   * Type Assertions //bad
   */
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  (result as string).length; //5
  // but 다른 타입이어도 컴파일 에러 발생하지 않음

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); //error

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); //bad

  const button = document.querySelector("class");
  if (button) {
    button?.nodeValue;
  }
}
