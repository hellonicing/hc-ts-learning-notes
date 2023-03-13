// js基本数据类型
// string number boolean undefined null symbol bigInt

let str: string = "weilong";
let num = 100; // 自动类型推导
let bool: boolean = false;

let a: undefined = undefined;
let b: null = null;
let c: symbol = Symbol(99);
let d: bigint = BigInt(99);
console.log(d);

// ts新增的类型
/*
void 函数没有返回值
never 不存在的类型
enum 枚举类型
unknow 还不知道的类型
any 任何类型

自定义类型
type  类型别名
interface 接口
*/

// Object、object 都不建议使用
// Object包括所有可扩展对象如String、Number
type B = Object; // 类似any
const testString: B = "n"; // 不报错

// object
type C = object; // 范围太大，无法约束对象内的具体内容
// const testNumber: C = 1; // 报错
const testObj: C = {};
