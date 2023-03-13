// Pick 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
interface Person {
  name: string;
  age: number;
  id: number;
  gender: "男" | "女";
}

// 重复利用Person中的类型，且自己选择需要里面的哪些类型
type nameAndId = Pick<Person, "name" | "id">;

let people: nameAndId = {
  name: "高启强",
  id: 1,
};

// Omit 从类型定义的属性中，删除一部分属性，返回一个新的类型定义。
type nameAndAge = Omit<Person, "id" | "gender">;
let people1: nameAndAge = {
  name: "安欣",
  age: 30,
};

// Partical 将类型定义的属性变为可选，返回一个新的类型定义。
type newPerson = Partial<Person>;
// 类型反选，将其它都变为可选，gender为必选
type gender = Partial<Person> & { gender: "男" | "女" };
let person: gender = {
  name: "刀哥",
  gender: "男",
};
