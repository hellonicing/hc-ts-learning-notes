// 1.数字枚举  通过等号赋值
// 通过该类型，访问对应的名字获取对应的值
enum direction {
  UP = 1,
  RIGHT = 3,
  DOWN = 2,
  LEFT = 4,
}

console.log(direction.DOWN);

// 2.没有指定值，默认从0开始
enum direction1 {
  UP,
  RIGHT,
  DOWN,
  LEFT,
}
console.log(direction1.UP); // 0

// 3.如果指定值，后面默认+1
enum direction2 {
  UP, // 0
  RIGHT = 5,
  DOWN, // 6
  LEFT,
}
console.log(direction2.DOWN); // 6

// 4.使用
let d: direction = 0;
console.log(d); // 0
let dd: direction = direction.RIGHT;
console.log(dd); // 3
