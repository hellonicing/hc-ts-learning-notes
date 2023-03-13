// 一、 联合类型
// 联合类型在定义的时候可以有很多种，但在使用时，需要进行类型收窄

// 1.在使用联合类型的时候，使用typeof区分类型
const uFn1 = (a: number | string) => {
  if (typeof a === "number") {
    // 类型收窄
    a.toFixed(2);
  } else if (typeof a === "string") {
    parseFloat(a).toFixed(2);
  } else {
    throw new Error("错误");
  }
}; //* typeof 适应于基本类型
// 2.对象、数组等复杂类型使用instanceof
const uFn2 = (a: Date | Date[] | string) => {
  if (a instanceof Date) {
    a;
  } else if (a instanceof Array<Date>) {
    a;
  } else if (a instanceof String) {
    // 基本类型报错
  } else {
    throw new Error("错误");
  }
}; //* instanceof 不支持基本类型，也不支持TS独有的类型
// 3.通过in判断,判断key是否在type内
type Person = {
  name: string;
};
type Animal = {
  isAnimal: boolean;
};
const uFn3 = (a: Person | Animal) => {
  if ("name" in a) {
    a;
  } else if ("isAnimal" in a) {
    a;
  }
}; //* in只适用于部分普通对象

// 以上方法都是基于js的类型判断

// 二、 ts的类型判断
// 1. is
type Rect = {
  width: number;
  height: number;
};
type Circle = {
  center: [number, number];
  radius: number;
};
// 通过定义function来辅助判断类型
function isRect(x: Rect | Circle): x is Rect {
  return "width" in x && "height" in x;
}
function isCircle(x: Rect | Circle): x is Circle {
  return "center" in x && "radius" in x;
}

const ObjFn = (obj: Rect | Circle) => {
  if (isRect(obj)) {
    obj;
  } else if (isCircle(obj)) {
    obj;
  }
}; // is支持所有ts类型

// 2. kind  可辩别联合
interface Square {
  kind: "square";
  sidelength: number;
}
interface Triangle {
  kind: "triangle";
  isEquilateral: boolean;
}
const ObjFn1 = (obj: Square | Triangle) => {
  if (obj.kind === "square") {
    obj;
  } else if (obj.kind === "triangle") {
    obj;
  }
};
/**
 * 使用要求：
 * 1.每个类型具有相同的属性kind，或其他
 * 2.每个类型的kind必须可以区分
 * 3.kind必须是基本数据类型
 * 同名可辩别的简单类型
 */

// 3.使用类型断言as 直接判断

// 二、 交叉类型
type User = {
  id: number;
  name: string;
};
type UserInformation = User & { tel: number; address: string };

// 交叉类型如果出现冲突，会成为never类型，在使用时才会报错，且不可使用
type UserInfo = {
  id: string;
  email: string;
} & User;
const user1: UserInfo = {
  // id: 123,
  name: "高启强",
};
