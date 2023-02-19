/**
 * 总结：
 * protected属性在当前类和子类可以访问，实例化对象不能访问
 */

// 当前类
class Animal {
  protected name: string = "狗狗";
  // 当前类访问protected
  sayA() {
    console.log(this.name);
  }
}
// 当前类实例访问protected
let d = new Animal();
console.log(d.name); // 报错：属性“name”受保护，只能在类“Animal”及其子类中访问。

// 子类
class Dog extends Animal {
  // 子类访问protected
  say() {
    console.log(this.name);
  }
}
// 当前子类实例访问protected
let dog = new Dog();
console.log(dog.name); // 报错
