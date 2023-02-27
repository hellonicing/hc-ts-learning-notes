// 数组的两种定义
// 1.直接定义
let arr: string[] = ["武汉", "杭州"];

// 2.使用泛型
let arr2: Array<string> = ["广州", "南京"];

// 3.使用interface定义数组对象
interface IArrObj {
  name: string;
  age?: number; // 属性名后问好代表可选
}
let arrObj: IArrObj[] = [
  {
    name: "weilong",
  },
  {
    name: "高启强",
    age: 20,
  },
];

// 4.二维数组
let arr2D: number[][] = [[1], [2]];

// 5.多类型数组 使用any或者元组,但是元组严格显示位置，类型和个数
let arrM: any[] = [1, "2", false, {}, []];
// 元组类型
let arrY: [number, string, boolean, object] = [1, "2", false, {}];

// 联合类型 或   多个类型可选
let arr3: (string | number)[] = [1, 2, "3"];
let arr4: string | number[] = [99, 100];
// arr4 = ["12"]; // 报错 赋值了字符串类型的数组，只能赋值数字类型的数组
arr4 = "12";
