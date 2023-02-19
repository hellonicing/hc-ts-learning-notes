// 数组的两种定义
let arr: string[] = ["武汉", "杭州"];
let arr2: Array<string> = ["广州", "南京"];

// 联合类型
let arr3: (string | number)[] = [1, 2, "3"];
let arr4: string | number[] = [99, 100];
arr4 = ["12"];
arr4 = "12";
