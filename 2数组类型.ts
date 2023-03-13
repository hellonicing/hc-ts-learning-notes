// 数组的两种定义
// 1.直接定义
let arr: string[] = ["武汉", "杭州"];

// 2.使用泛型
let arrString: Array<string> = ["广州", "南京"];

// 3.使用interface定义数组内对象
interface IArrObj {
  name: string;
  age?: number; // 属性名后问号代表可选
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

// 5.多类型数组
// 使用any
let arrM: any[] = [1, "2", false, {}, []];
// 元组类型: 元组严格限制位置的类型和个数
let arrY: [number, string, boolean, object] = [1, "2", false, {}];
let arr2: [string, number] = ["青岛", 2022];
// 如上，元组中只能包含两个元素，第一个元素只能是string，第二个元素只能是number

// 联合类型 或的意思   多个类型可选
let arr3: (string | number)[] = [1, 2, "3"];
let arr4: string | number[] = [99, 100];
// arr4 = ["12"]; // 报错 赋值了字符串类型的数组，只能赋值数字类型的数组
arr4 = "12";
