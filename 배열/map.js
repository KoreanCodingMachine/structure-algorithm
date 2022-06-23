// Array.prototype.map;
// 콜백 함수의 반환값들로 구성된 새로운 배열을 반환한다.
// 원본 배열은 변경되지 않는다.
// 요소값을 다른 값으로 매핑한 새로운 배열을 생성하기 위한 고차함수

const numbers = [1, 4, 9];

const roots = numbers.map((item) => Math.sqrt(item));
console.log(roots); // [1,2,3]
