// 1.对象标注类型

let person1: {
  name: string;
  age: number;
} = {
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
let person3: IPerson = {
  name: "臭豆腐",
  age: 23,
};
