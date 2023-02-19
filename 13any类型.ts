// any就是任意类型
// 如果设定any类型，也就失去了类型推断的意义，因此不推荐使用

let num: any;
num = 1;
num = "1";
num = true;

let num1: number;
num1 = 1;
num1 = "1"; // 报错
