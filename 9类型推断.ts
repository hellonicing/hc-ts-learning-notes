//基础类型赋值后会自动推断类型

let username = "卫龙";
let num = 12;

// 函数对参数设定类型也会自动推断返回值
function add(a: number, b: number) {
  return a + b;
}

// 能省略类型注解的地方就省略，尽量使用ts的类型推断
// 提高开发效率
