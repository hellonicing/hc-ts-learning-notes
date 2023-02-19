// 相同的类型反复使用，可以使用类型别名
let arr: (string | number)[] = ["武汉", "南京", 99];
let arr2: (string | number)[] = ["青岛", "杭州", 100];

type ArrOfStrOrNum = (string | number)[];
let arr3: ArrOfStrOrNum = ["成都", "重庆", 22];
