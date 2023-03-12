// js中的typeof
console.log(typeof "武汉"); // string
console.log(typeof 1); // number
console.log(typeof false); // boolean

let d = {
  x: 1,
  y: 2,
};

console.log(typeof d);
// ts中的typeof 可以用来定义类型别名,自动获取引用数据类型
// type dType = typeof d
function getRes(arg: typeof d) {
  return arg.x + arg.y;
}
let res = getRes({ x: 10, y: 20 });
console.log(res);
