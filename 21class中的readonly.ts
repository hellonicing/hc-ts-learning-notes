/**
 * 总结：
 * readonly属性 只读
 * readonly在实例化的时候赋值可以修改（通过constructor）
 */

class Person {
  // readonly只读，普通函数不能修改
  readonly name: string = "中国人";
  // 构造函数可以对readonly赋值
  constructor(name: string) {
    this.name = name;
  }
  setName() {
    // this.name = "张四"; // 无法为“name”赋值，因为它是只读属性。
  }
}

const zhangSan = new Person("张三"); // 这里通过实例化传入，修改
console.log(zhangSan.name); // 张三
