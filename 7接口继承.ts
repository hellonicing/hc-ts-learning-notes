interface Ipoint2D {
  x: number;
  y: number;
}
// 接口继承，再2D的基础上再添加z
interface Ipoint3D extends Ipoint2D {
  z: number;
}

let model2D: Ipoint2D = {
  x: 12,
  y: 200,
};
let model3D: Ipoint3D = {
  x: 100,
  y: 200,
  z: 300,
};
