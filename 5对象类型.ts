// 设置对象类型
let person: { name: string; age: number; say: () => void; walk: () => void } = {
  name: "大辣条",
  age: 18,
  say: () => {
    console.log("哈罗");
  },
  walk: function () {
    console.log("溜了");
  },
};
