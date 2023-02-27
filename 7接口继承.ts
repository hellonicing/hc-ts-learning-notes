interface Ipoint2D {
  x: number;
  y: number;
}
// 接口继承，再2D的基础上再添加z
interface Ipoint3D extends Ipoint2D {
  z: number;
}
// 接口继承的优点是，当类型存在冲突时，代码会提示报错
// 而type类型别名，存在类型冲突时会显示为never类型，只有使用时才会报错

let model2D: Ipoint2D = {
  x: 12,
  y: 200,
};
let model3D: Ipoint3D = {
  x: 100,
  y: 200,
  z: 300,
};
