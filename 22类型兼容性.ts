class Point {
  x: number;
}

class Point2D {
  x: number;
  y: number;
}
class Point3D {
  x: number;
  y: number;
  z: number;
}

// p使用Point2D，但是Point2D中要求有x和y，p中没有y，不满足类型
let p: Point2D = new Point();

// p2使用Point类型，其中只需要包含x，满足类型要求
let p2: Point = new Point2D();
let p3: Point = new Point3D();
