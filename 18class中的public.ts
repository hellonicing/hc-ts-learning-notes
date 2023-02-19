/**
 * 总结：
 * public属性在当前类、子类和实例对象都可以访问
 */

// 当前类
class Animal {
  public name: string = "狗狗";
  // 当前类访问public
  sayA() {
    console.log(this.name);
  }
}
// 当前类实例访问public
let d = new Animal();
console.log(d.name);

// 子类
class Dog extends Animal {
  // 子类访问public
  say() {
    console.log(this.name);
  }
}
// 当前子类实例访问public
let dog = new Dog();
dog.say();
