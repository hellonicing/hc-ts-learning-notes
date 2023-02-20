interface IMyFun<T> {
  fn1: (value: T) => T;
  fn2: () => T[];
}

// 泛型接口可以根据传入的类型，随时改变
// objNum中，T是number
let objNum: IMyFun<number> = {
  fn1: (val: number) => {
    return val;
  },
  fn2: () => {
    return [1, 2, 3];
  },
};

// objStr中，T是string
let objStr: IMyFun<string> = {
  fn1: (val: string) => {
    return val;
  },
  fn2: () => {
    return ["1", "2", "3"];
  },
};
