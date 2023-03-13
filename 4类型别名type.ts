// Type Aliases 类型别名，给类型取一个名字
// 1.几乎可以用在任何场合
type Name = string;
const hisName: Name = "安欣";

// 2.假值
type FalseLike = 0 | "" | null | undefined | false;

// 3.相同的类型反复使用，可以使用类型别名
let arr: (string | number)[] = ["武汉", "南京", 99];
let arr2: (string | number)[] = ["青岛", "杭州", 100];
// 通过type定义类型别名 并且使用联合类型 |
type ArrOfStrOrNum = (string | number)[];
let arr3: ArrOfStrOrNum = ["成都", "重庆", 22];
/* 
 type 适用于所有类型如字符串、对象、函数等，
 而interface一般用于对象
 并且type多用于联合类型
*/

// 4.type定义函数类型
type Fn = () => void;
// 5.type定义函数和属性
type FnWithProps = {
  (a: number, b: number): number;
  prop: string;
};
const fn: FnWithProps = (x, y) => {
  return x * y;
};
fn.prop = "高启强";
console.log(fn);

// 6.type和interface
interface IX {
  age: number;
}

type A1 = Array<string> & {
  name: string;
} & IX;

interface IA2 extends Array<string>, IX {
  name: string;
}
//A1和IA2的类型相同

// 7. interface 定义函数
interface IFunc {
  (a: number, b: number): number;
  (x: string, y: string): void;
}
const fn: IFunc = (a: number, b: number): number => {
  return a + b;
};

// 8. type 不可重新赋值
