// Array.prototype.reduce;
// 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백 함수를 반복 호출한다.
// 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여
// 하나의 결과값을 만들어 반환한다.

// reduce(accumulator, currentValue, index, array);
// accumulator -> 초기값 또는 콜백 함수의 이전 반환값
// currentValue -> reduce 메서드를 호출한 배열의 요소값
// index -> 인덱스
// array -> this

// 1부터 4까지 누적을 구한다.
// reduce메서드는 하나의 결과값을 반환한다.
const sum = [1, 2, 3, 4].reduce((acc, cur, idx, arr) => acc + cur, 0);
console.log(sum);

//평균 구하기
const values = [1, 2, 3, 4, 5, 6];
const average = values.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? acc + cur / length : acc + cur;
}, 0);

//최대값 구하기
const value = [1, 2, 3, 4, 5];
const max = value.reduce((acc, cur, i, arr) => {
  acc > cur ? acc : cur;
}, 0);

//Math.max로 구현
const val = [1, 2, 3, 4, 5];
const max3 = Math.max(...val);

//요소의 중복 횟수 구하기
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];
const count = fruits.reduce((acc, cur) => {
  acc[cur] = (acc[cur] || 0) + 1;
  return acc;
}, {});

//중복 요소 제거
const arr = [1, 2, 1, 3, 5, 4, 5, 3, 4, 4];
const result = arr.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});
console.log(result);
