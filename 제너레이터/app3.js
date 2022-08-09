function* genFunc() {
  const x = yield 1;
  const y = yield x + 10;
  return x + y;
}

const generator = genFunc();

// 처음 호출하는 next 메서드에는 인수를 전달하지 않는다.
// 전달하면 무시된다.
let res = generator.next();
console.log(res); // { value: 1, done: false }

// x 변수에 할당된다.
res = generator.next(10);
console.log(res); // { value: 20, done: false }

res = generator.next(20);
console.log(res); // { value: 30, done: true }
