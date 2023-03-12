// 1.any就是任意类型
// 如果设定any类型，也就失去了类型推断的意义，因此不推荐使用
let num: any;
num = 1;
num = "1";
num = true;

let num1: number;
num1 = 1;
// num1 = "1"; // 报错

// 2.unknown类型 就是当前不知道什么类型，等需要用到时，再通过断言判断类型
let res: unknown = fetch("api/name");
// 例如通过fetch返回的数据类型，目前还不知道是什么类型
let resName = res as string;
// 当我们知道返回的一定是string时，通过as断言

// 3.never类型 一般用于判断是否发生错误
interface IA {
  a: string;
  b: number;
}
interface IB {
  b: boolean;
  c: string;
}
// interface 在定义时，存在类型冲突会直接报错
// type 存在类型冲突就会成为never类型，当使用type时才会报错
interface IC extends IA {
  b: boolean;
}

// 交叉类型
// type IC = IA & IB;

type TA = {
  a: string;
  b: number;
};
type TB = {
  b: boolean;
  c: string;
};
type TC = TA & TB;
const tc: TC = {
  a: "aaa",
  b: 123,
  c: "ccc",
};
