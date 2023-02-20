// 1.对象标注类型
let person1: { name: string; age: number } = {
  name: "大辣条",
  age: 22,
};

// 2.类型别名：可以对所有类型进行约束
type PersonType = {
  name: string;
  age: number;
};

let person2: PersonType = {
  name: "小辣条",
  age: 18,
};

// 3.接口：只能对类进行约束
interface IPerson {
  name: string;
  age: number;
}
// 4.声明的对象中属性要和interface中一摸一样，不能多也不能少。
let person3: IPerson = {
  name: "臭豆腐",
  age: 23,
};

// 5.同名interface 会自动合并

// 6.如果返回对象有多个属性，但是自己只需要部分属性
interface ITestData {
  name: string;
  data: [];
  // 索引签名
  [foo: string]: any; // 这里是忽略其他属性
}

let resData = {
  name: "卫龙",
  age: 20,
  // abc不会被校验
  a: 1,
  b: 2,
  c: 3,
};

// 7.可选操作符? 和只读 readonly
interface IoptionData {
  name: string;
  text?: string;
  readonly id: string;
  readonly cb: () => boolean;
}

let optionData: IoptionData = {
  name: "weilong",
  // 对象中没有text属性，也不会报错，因为该属性是可选的
  id: "ax120b",
  cb: () => {
    return false;
  },
};
// optionData.id = "ssss"; // 报错
// optionData.cb = ()=>{return 1};  // 报错
