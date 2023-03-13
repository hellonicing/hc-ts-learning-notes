// 1.普通函数
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 4));

// 2.箭头函数
const arrowSub = (a: number, b: number): number => {
  return a - b;
};

// 3.可选参数   函数没有return时，返回类型写void
function slice(start: number, end?: number): void {
  console.log(`开始索引是${start},结束索引是${end}`);
}
slice(3);

// 4.使用interface 定义函数类型
interface IMyFn {
  (a: string): number[];
}

const myFn: IMyFn = (a: string) => {
  return [1, 2];
};

// 5.函数中剩余参数的类型
function fnArg(...arg: number[]) {
  // 剩余参数是数组
  console.log(arg);
  // arguments是类数组，ts提供内置类型
  let a: IArguments = arguments;
  console.log(a);
}
fnArg(2, 4);

// 6.普通函数中使用this
type Person = {
  username: string;
  age: number;
  sayHii: FnWithThis;
};
type FnWithThis = (this: Person, username: string) => void;

// const sayHi: FnWithThis = () => {
//   console.log("hi" + this.username);
// };
const sayHii: FnWithThis = function (name) {
  console.log("hi" + this.username + name);
};

const person: Person = {
  username: "高启强",
  age: 30,
  sayHii: sayHii,
};
person.sayHii("jack");
// 等同于
sayHii.call(person, "jack");

// 7.声明类型时，void表示没有返回值，但return也不报错，但是返回值无法使用
type Fn = () => void;
const testFn: Fn = () => {
  return 1;
};
const resFn = testFn();
console.log(resFn.toFixed(2));

// 但是直接在函数本身限制void则会直接报错
function testVoid(a: number): void {
  return 1;
}
