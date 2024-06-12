class Animal {
  constructor(name) {
    this.nickname = name;
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super(name)
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); 
console.log(rabbit.name); //undefined -> name이 아닌 nickname으로 선언했기 때문 (정의 되어있지 않음)
console.log(rabbit.nickname);