//Array.prototype.forEach
//원본 배열을 변경하는 함수는 아니지만 콜백함수를 통해 원본 함수를 변경할 수는 있다.
//arr.forEach((item,index,arr)=>{})
//단순 반복문을 대체하기 위한 고차함수

const numbers = [1, 2, 3];
const pows = [];

numbers.forEach((item, idx, arr) => pows.push(item ** 2));
console.log(pows); // [1,4,9]

//foreEach 메서드의 반환값은 언제나 undefined이다.
const result = [1, 2, 3].forEach(console.log);
console.log(result); // undefined
