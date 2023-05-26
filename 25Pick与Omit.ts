// Pick 从类型定义的属性中，选取指定一组属性，返回一个新的类型定义。
interface Person {
  name: string;
  age: number;
  id: number;
  gender: "男" | "女";
}

// //重复利用Person中的类型，且自己选择需要里面的哪些类型
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

// Partial 将类型定义的属性变为可选，返回一个新的类型定义。
type newPerson = Partial<Person>;
// //类型反选，将其它都变为可选，gender为必选
type gender = Partial<Person> & { gender: "男" | "女" };
let person: gender = {
  name: "刀哥",
  gender: "男",
};

// //新建一个由key指定的属性和type指定的值组成的对象
// Record<key type, value type>
type Lang = 'zh' | 'en' | 'jp'
type Trans = { you: string, and: string, me: string }
type I18n = Record<Lang, Trans>

// Required 将类型定义的属性变为必选，返回一个新的类型定义
type list = {
  name: string,
  age?: number,
  gender?: string
}
type requireList = Required<list>
// // 问题：我只想list中的age变为必选，怎么操作？


type Topics = 'js' | 'css' | 'html' | 'ts' | 'go' | 'rust'
// Exclude 排除一些类型
type FeTopics = Exclude<Topics, 'go' | 'rust'>
// Extract 提取一些类型
type BeTopics = Extract<Topics, 'go' | 'rust' | 'c#'>

