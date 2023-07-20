# TypesScript에서 enum 사용을 지양하는 이유

## enum이란?

- enum은 열거형 변수로 정수를 하나로 합칠 때 편리한 기능.
- 임의의 숫자나 문자열을 할당할 수 있으며 하나의 유형으로 사용해서 버그를 줄일 수 있음.
- 타입스크립트도 다른 언어와 마찬가지로 enum타입을 제공함

```jsx
//아무것도 지정하지 않은 경우 0부터 숫자를 매김
enum Days {
  Monday, //0
  Tuesday, //1
  Wedensday, //2
  Thursday, //3
  Friday, //4
  Saturday, //5
  Sunday, //6
  }
```

```jsx
// 임의의 숫자나 문자열을 할당할 수도 있다
enum Days {
  Monday='Monday'
  Tuesday='Tuesday',
  Wedensday='Wedensday',
  Thursday='Thursday',
  Friday='Friday',
  Saturday='Saturday',
  Sunday='Sunday',
  }
```

## typescript에서 enum을 지양하는 이유?

- enum은 TypeScript가 자체적으로 구현하는 기능
- JavaScript에서는 사용할 수 없기 때문에 아래와 같이 객체를 사용하는 코드를 자주 작성하게 된다.

```jsx
const DAYS = {
  Monday: "Monday",
  Tuesday: "Tuesday",
};
console.log(DAYS.Monday); // Monday
```

- TypeScript에서 enum을 사용하면 Tree-shaking이 되지 않는다.
- Tree-shaking이란 간단하게 말해 사용하지 않는 코드를 삭제하는 기능을 말합니다. Tree-shaking을 통해 export했지만 아무 데서도 import하지 않은 모듈이나 사용하지 않는 코드를 삭제해서 번들 크기를 줄여 페이지가 표시되는 시간을 단축할 수 있습니다.

```jsx
enum DAYS {
  Monday, //0
  Tuesday, //1
  Wedensday, //2
  Thursday, //3
  Friday, //4
  Saturday, //5
  Sunday //6,
}
```

```jsx
  enum Days {
  Monday='Monday'
  Tuesday='Tuesday',
  Wedensday='Wedensday',
  Thursday='Thursday',
  Friday='Friday',
  Saturday='Saturday',
  Sunday='Sunday',
  }
```

- 위에 코드를 각각 트랜스파일하면 아래와 같은 JavaScript 코드가 된다.

```jsx
export var DAYS;
(function (DAYS) {
  DAYS[(DAYS["Monday"] = 0)] = "Monday";
  DAYS[(DAYS["Tuesday"] = 1)] = "Tuesday";
})(DAYS || (DAYS = {}));

// 문자열을 할당한 경우
export var DAYS;
(function (DAYS) {
  DAYS["Monday"] = "Monday";
  DAYS["Tuesday"] = "Tuesday";
})(DAYS || (DAYS = {}));
```

- enum의 문제점은 크게 2가지이다.
- JavaScript에 존재하지 않는 것을 구현하기 위해 TypeScript 컴파일러는 IIFE(즉시 실행 함수)를 포함한 코드를 생성한다.(()=>{})() (즉시 실행 함수로 평가되어 트리 쉐이킹이 되지 않아 빌드 파일의 크기가 커진다.)
- Rollup과 같은 번들러는 IIFE를 '사용하지 않는 코드'라고 판단할 수 없어서 Tree-shaking이 되지 않습니다. 결국 DAYS를 import하고 실제로는 사용하지 않더라도 최종 번들에는 포함되는 것입니다.
- 선언되지 않는 key값의 접근을 허용해버린다.

- 타입스크립트에서 ENUM 대신 어떤거를 쓰면 좋을까?

```jsx
// Union Types를 사용
const DAYS = {
  Monday: 'Monday',
  Tuesday: 'Tuesday'
} as const;
type DAYS = typeof DAYS[keyof typeof DAYS]; // 'Monday' | 'Tuesday'
```

- 위 코드는 아래와 같은 JavaScript 코드로 트랜스파일링 된다.

```jsx
const DAYS = {
  Monday: "Monday",
  Tuesday: "Tuesday",
};
```

- TypeScript 코드에서는 DAYS 타입을 정의한 이점을 그대로 누리면서, JavaScript로 트랜스파일해도 IIFE가 생성되지 않으므로 Tree-shaking을 할 수 있다.
- 지금까지 JavaScript 객체로 enum 같은 것을 표현한 경우, 트랜스파일된 JavaScript에서도 별다른 차이 없이 유형으로 사용하는 이점을 누릴 수 있는 것도 좋은 점이다.

```jsx
///const enum을 사용
/* TS */
const enum EnumKeyboard {
  "UP",         // 0
  "LEFT",       // 1
  "BOTTOM",     // 2
  "RIGHT",      // 3
}
console.log(EnumKeyboard[100]);              // error !
console.log(EnumKeyboard['LeftDown']);     // error !

/* JS */
console.log(0 /* 'UP' */);                 // enum 객체가 아닌 상수로 치환된다.
```

- const enum은 객체를 생성하지 않아 트리 쉐이킹의 문제점이 없고, 존재하지 않는 키 값의 접근을 제한하여 enum보다 안전하게 코드를 작성할 수 있다. (컴파일 시점에 객체를 생성하지 않는 대신 enum을 사용하는 부분을 값으로 치환환다.)

## const enum의 문제점

- 하지만 const enum이 완벽한 것은 아니다.

- babel이 트랜스파일링 못해, babel-plugin-const-enum 플러그인을 설치해야 한다.
- 값을 객체로 생성하는게 아니라, 임의로 변경시 에러를 추적하기 어렵다. (이를 방지하기 위해, preserveConstEnums flag를 true로 변경하면 enum 처럼 객체를 생성한다.)
- 문자열 값을 유니코드로 생성하여, 빌드 파일의 크기가 커진다.

## 마무리

Tree-shaking 관점에서 보았을 때 아래와 같은 순서로 사용하시길 추천한다.

```
Union Types > const enum > enum
```
