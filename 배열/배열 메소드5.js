// Array.prototype.join;
// 원본 배열의 모든 요소를 문자열로 변환한 후 , 구분자로 연결한 문자열을 반환한다.
// 구분자는 생략 가능하며 기본 구분자는 콤마이다.

const arr = [1, 2, 3, 4];

arr.join(); // '1,2,3,4'
arr.join(''); // '1234'
arr.join(':'); //'1:2:3:4'

//Array.prototype.reverse
//원본 배열의 순서를 반대로 뒤집는다. 이떄 원본 배열은 변경된다.
//반환 값은 변경된 배열

const arr2 = [1, 2, 3];
const result = arr.reverse();

console.log(arr2); // [3,2,1]
console.log(result); // [3,2,1]

// Array.prototype.fill;
// 인수로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.
// 원본 배열이 변경된다.

const arr3 = [1, 2, 3];
arr3.fill(0);
console.log(arr3); // [0,0,0] 원본 배열을 직접 변경한다.
arr3.fill(0, 1); // 인덱스 1부터 0으로 채운다. [1,0,0]

const arr4 = [1, 2, 3, 4, 5];
arr4.fill(0, 1, 3); // 0을 인덱스 1부터 인덱스 3 이전(3 미포함)까지 요소로 채운다. [1,0,0,4,5]

// Array.prototype.includes;
// 배열 내에 특정 요소가 포함되어 있는지 확인하여 true or false를 반환한다.
const arr5 = [1, 2, 3];
arr5.includes(2); // true
arr5.includes(100); // false
arr5.includes(3, -1); // 배열에 요소 3이 포함되어 있는지 인덱스2 (arr.length-1)부터 확인한다.

// Array.prototype.flat
// 인수로 전달한 깊이만큼 재귀적으로 배열을 평탄화한다.
