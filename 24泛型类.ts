// 定义一个class使用泛型
class MyClass<T> {
  // ！：表示强制解析（告诉typescript编译器，这里一定有值）
  // 表示类型推断排除null、undefined
  defaultValue!: T;
  add: (x: T, y: T) => T;
  /**
   *  没有初始化，就会报错
   *  Property 'add' has no initializer and is not definitely assigned in the constructor.
   */
  constructor(value: T) {
    this.defaultValue = value;
  }
}

// 1.使用字面量创建对象，类型使用class
let objClass1: MyClass<number> = {
  defaultValue: 100,
  add: (x, y) => {
    return x + y;
  },
};
// 1.1 调用add方法
let res1 = objClass1.add(2, 3);
console.log(res1);

// 2.使用new 实例化
let objClass2 = new MyClass<number>(100);

let res2 = objClass1.add(5, 3);
console.log(res2);
console.log(objClass2.defaultValue);
