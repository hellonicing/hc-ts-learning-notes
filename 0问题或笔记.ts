/**
 * ts在变量声明并指定类型时，必须严格确定类型个数和对应属性
 * 但是在赋值是，只要求赋值的变量中存在该指定类型即可
 */
interface left {
  left: string;
}
// 声明并指定类型
const b: left = {
  left: "l",
  right: "r",
};

const aa = {
  left: "l",
  right: "r",
};
// 赋值
const bb: left = aa;
console.log(bb);

// interface和type的区别
//** *interface只描述对象，type可以描述所有数据类型
//** *type 只是类型别名，而interface是类型声明
//** *type声明之后自身不可重新赋值，而interface声明自身可以继续扩展，如同名自动合并;通过declear添加等
//    因此对外API使用interface，方便扩展；对内API使用type，防止被改写
//** *interface在使用交叉类型时，如果出错会直接提示错误；而type使用交叉类型时，只有在使用type时才会报错
