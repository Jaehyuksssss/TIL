// basic types

{
  /**
   * Javascript
   * Primitive: number , string , boolean , bright , symbol , null , undefined
   * Object : function , array ...
   *  */

  // number
  const num: number = 9;

  //string
  const str: string = "hello";

  //boolean
  const boool: boolean = false;

  //undefined; (단독적으로 쓰이진 않음)
  let name: undefined; //unusual
  let age: number | undefined;
  age = undefined;
  age = 1;

  const find = (): number | undefined => {
    return undefined;
  };

  // null
  let person: null; //unusual
  let person2: string | null;

  //unknown ()
  let notSure: unknown = 0;
  notSure = "goood";
  notSure = true;

  //any
  let anything: any = 0;
  anything = "hello";
  //unknown은 '어떤게 들어올지 모르겠어 하는 겸손한 느낌  , any는 대놓고 아무거나 들어와도 된다는 느낌'
  //둘다 지양해야함

  //void // return이 없는 자료형
  function print() {
    console.log("hello");
    return;
  }
  //never 다른것을 return 못해줌
  function throwError(message: string): never {
    //message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  //object //원시타입을 제외한 모든 타입을 지정 가능
  let obj: object;
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "Jaehuyk" });
  acceptSomeObject({ animal: "dog" });
}
