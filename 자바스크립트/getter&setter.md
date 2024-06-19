# 프로퍼티 Getter와 Setter: 접근자 프로퍼티

JavaScript 객체의 프로퍼티는 두 가지 종류로 나뉩니다: 데이터 프로퍼티와 접근자 프로퍼티입니다. 데이터 프로퍼티는 우리가 일반적으로 사용하는 프로퍼티입니다. 반면, 접근자 프로퍼티는 함수로, 값을 획득(get)하고 설정(set)하는 역할을 합니다. 외부 코드에서는 일반적인 프로퍼티처럼 보이지만, 실제로는 함수로 동작합니다.

## Getter와 Setter

접근자 프로퍼티는 getter와 setter 메서드로 표현됩니다. 객체 리터럴 안에서 `get`과 `set` 키워드를 사용해 정의할 수 있습니다.

```javascript
let obj = {
  get propName() {
    // getter, obj.propName을 실행할 때 실행되는 코드
  },
  set propName(value) {
    // setter, obj.propName = value를 실행할 때 실행되는 코드
  }
};
```
getter 메서드는 프로퍼티를 읽을 때, setter 메서드는 프로퍼티에 값을 쓸 때 실행됩니다.


## 이메일 property

username과 domain이 있는 객체에 email이라는 접근자 프로퍼티를 추가해 보겠습니다.

```javascript
let user = {
  username: "john.doe",
  domain: "example.com",

  get email() {
    return `${this.username}@${this.domain}`;
  },

  set email(value) {
    [this.username, this.domain] = value.split("@");
  }
};

console.log(user.email); // john.doe@example.com
user.email = "alice.smith@anotherdomain.com";
console.log(user.username); // alice.smith
console.log(user.domain); // anotherdomain.com
```

이렇게 하면 email을 통해 username과 domain을 읽고 쓸 수 있습니다.

## 접근자 프로퍼티 설명자
접근자 프로퍼티는 get과 set이라는 함수로 정의됩니다. 설명자는 다음과 같습니다:

- get: 프로퍼티를 읽을 때 동작하는 함수
- set: 프로퍼티에 값을 쓸 때 호출되는 함수
- enumerable: 열거 가능한 프로퍼티 여부
- configurable: 프로퍼티 정의를 변경할 수 있는지 여부

```javascript
let user = {
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
  enumerable: true,
  configurable: true
};
```

## 접근자 property 사용

다음은 다양한 상황에서 접근자 프로퍼티를 사용하는 예제입니다.

## 예제 1: 단순 접근자 프로퍼티
```javascript

let person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    let parts = name.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // John Doe
person.fullName = "Jane Smith";
console.log(person.firstName); // Jane
console.log(person.lastName); // Smith
```
## 예제 2: 계산된 접근자 프로퍼티
```javascript

let rectangle = {
  width: 10,
  height: 5,
  get area() {
    return this.width * this.height;
  },
  set dimensions(dimensions) {
    [this.width, this.height] = dimensions.split('x').map(Number);
  }
};

console.log(rectangle.area); // 50
rectangle.dimensions = "20x10";
console.log(rectangle.area); // 200
console.log(rectangle.width); // 20
console.log(rectangle.height); // 10
```
이와 같이, getter와 setter는 객체의 프로퍼티를 보다 유연하고 직관적으로 관리할 수 있는 강력한 도구입니다.