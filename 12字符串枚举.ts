// 字符串枚举类型

enum directionStr {
  UP = "up",
  RIGHT = "right",
  DOWN = "down",
  LEFT = "left",
}

console.log(directionStr.LEFT);

function changeDirection(direction: directionStr) {
  console.log(direction);
}
changeDirection(directionStr.DOWN);
