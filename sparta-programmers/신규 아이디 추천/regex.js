const regex = /\d{3}-\d{4}-\d{4}/;
// (\d는 숫자를 의미하고, {} 안의 숫자는 갯수를 의미한다.)

let a = regex.test('010-1111-2222'); // true;
let b = regex.test('01-11-22'); // false;

console.log(a); // true
console.log(b); // false

// 리터럴 방식
const regex2 = /abc/;

const regex3 = new RegExp('abc');
