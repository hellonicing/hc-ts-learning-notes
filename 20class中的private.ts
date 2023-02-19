/**
 * 总结：
 * private属性在当前类中可以访问，子类和实例化对象不能访问
 */

// 当前类
class Animal {
  private name: string = "狗狗";
  // 当前类访问private
  sayA() {
    console.log(this.name);
  }
}
// 当前类实例访问private
let d = new Animal();
console.log(d.name); // 报错：属性“name”为私有属性，只能在类“Animal”中访问。

// 子类
class Dog extends Animal {
  // 子类访问private
  say() {
    console.log(this.name); // 报错
  }
}
// 当前子类实例访问private
let dog = new Dog();
console.log(dog.name); // 报错
