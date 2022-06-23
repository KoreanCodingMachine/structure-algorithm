// Array.prototype.unshift;
// 인수로 전달받은 모든 값을 원본 배열의 선두에 요소로 추가, 변경된 length 프로퍼티 값을 반환한다.
// 원본 배열을 직접 변경한다.

const arr = [1, 2];

let result = arr.unshift(3, 4);
console.log(result); // 4
console.log(arr); // [3,4,1,2]

// 스프레드 문법으로 대체할 수 있다.
const newArr = [3, ...arr];
console.log(newArr); // [3,1,2]

//Array.prototype.shift
//원본 배열에서 첫 번째 요소를 제거하고 제거한 요소를 반환
//원본 배열을 직접 변경한다.

const arr2 = [1, 2];
let result2 = arr2.shift();
console.log(result); // 1
console.log(arr2); // [2]

//큐는 데이터를 마지막에 밀어 넣고 , 처음 데이터 즉 가장 먼저 밀어 넣은 데이터를 먼저 꺼내는 선입선출(FIFO)방식의 자료구조이다.
//shift 와 push로 구현
