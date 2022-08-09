/*
스프레드 문법 => for...of로 순회할 수 있는 이터러블에 한정된다.
*/

console.log(...[1, 2, 3]); // 1 2 3
console.log(...'Hello'); // H e l l o
// console.log(...{ a: 1, b: 2 }); // TypeError

// 스프레드 문법의 결과는 값이 아니다.
// 스프레드 문법의 결과물은 값으로 사용할 수 없고, 쉼표로 구분한 값의 목록을 사용하는 문맥에서만 사용한다.
// const list = ...[1,2,3]; // SyntaxError

// 1.함수 호출문의 인수 목록에서 사용하는 경우

const arr = [1, 2, 3];
const max = Math.max(...arr);
console.log(max); // 3
