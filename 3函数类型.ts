// 普通函数
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 4));

// 箭头函数
const arrowSub = (a: number, b: number): number => {
  return a - b;
};

// 可选参数   函数没有return时，返回类型写void
function slice(start: number, end?: number): void {
  console.log(`开始索引是${start},结束索引是${end}`);
}
slice(3);
