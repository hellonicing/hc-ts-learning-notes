/**
 * class就是将属性和方法放在一起统一管理
 */

class Person {
  // 指定类型，用=赋初始值
  name: string = "";
  age: number = 0;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let p1 = new Person("高启强", 28);
console.log(p1);

// class普通函数
class Mul {
  x: number = 2;
  mulFn(y: number) {
    return this.x * y;
  }
}

let res = new Mul();
console.log(res.mulFn(5));
