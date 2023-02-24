//  1 | 2 就是字面量 类型
let num: 1 | 2 = 1;
// let num3: 1 | 2 = 3;  // 报错

// 只能传固定的参数，相比string类型，字面量更加精确和严谨
function changeDirection(direction: "UP" | "RIGHT" | "DOWN" | "LEFT") {
  console.log(direction);
}
changeDirection("UP");
