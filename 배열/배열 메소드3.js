// Array.prototype.concat
// 인수로 전달된 값들을 원본 배열의 마지막 요소로 추가한 새로운 배열을 반환한다.
// 원본 배열은 변경되지 않는다!

const arr1 = [1, 2];
const arr2 = [3, 4];

let result = arr1.concat(arr2);
console.log(result); // [1,2,3,4]

//ES6의 스프레드 문법으로 대체

let result2 = [1, 2].concat([3, 4]);
console.log(result2); // [1,2,3,4]

let result3 = [...[1, 2], ...[3, 4]];
console.log(result3); // [1,2,3,4]
