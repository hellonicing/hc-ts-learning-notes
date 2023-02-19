class Person {
  // readonly只读，普通函数不能修改
  readonly name: string = "中国人";
  // 构造函数可以对readonly赋值
  constructor(name: string) {
    this.name = name;
  }
  setName() {
    // this.name = "张三"; // 无法为“name”赋值，因为它是只读属性。
  }
}

const zhangSan = new Person("张三");
console.log(zhangSan.name); // 张三
