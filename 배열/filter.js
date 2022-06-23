// Array.prototype.filter;
// 콜백 함수의 반환값이 true인 요소로만 구성된 새로운 배열을 반환한다.
// 원본 배열은 변경되지 않는다.

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter((item, index, arr) => item % 2); // 1은 true로 평가된다.
console.log(odds); // [1,3,5]
