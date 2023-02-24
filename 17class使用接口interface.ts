interface IPerson {
  name: string;
  say(): void;
}

// class通过implements使用接口
class Student implements IPerson {
  name = "张三";
  say() {
    console.log(`你好,我是${this.name}`);
  }
}

const zhangSan = new Student();
zhangSan.say();
