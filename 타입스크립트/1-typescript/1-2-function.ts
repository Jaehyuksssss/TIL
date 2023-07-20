{
  //javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //javascript
  function jsFetch(id) {
    //code ...
    //code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  //typescript
  function tsFetch(id: string): Promise<number> {
    //code ...
    //code ..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //javascript => typescsript 다 가능

  //Optional parameter <?>
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Jaehyuk", "Lim");
  printName("Jaehyuk"); //인자로 두개를 넣지 않아도 에러가 발생되지 않음
  printName("Anna", undefined);

  // Default parameter // 전달하지 않으면 기본 값으로
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  //rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));
  console.log(addNumbers(1, 2, 3, 4, 5));
  console.log(addNumbers(1, 2, 4, 5, 6, 7));
}
