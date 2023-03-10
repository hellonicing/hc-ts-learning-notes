class Animal {
  move() {
    console.log("移动");
  }
}
// 子class通过extends 继承父class中的属性和方法
class Dog extends Animal {
  bark() {
    console.log("汪");
  }
}

const dog = new Dog();
dog.bark(); // dog实例可以调用Dog类的bark方法
dog.move(); // dog实例也可以通过继承，访问Animal类中的move方法
