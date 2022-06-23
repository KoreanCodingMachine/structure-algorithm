//1.Array.isArray;
//메서드는 전달된 인수가 배열이면 true , 아니면 false를 반환한다.

Array.isArray([]); // true
Array.isArray(); // false

//2.Array.prototype.indexOf;
//원본 배열에서 인수로 전달된 요소를 검색하여 인덱스를 반환한다.
//원본 배열에 인수로 전달한 요소와 중복되는 요소가 여러 개 있다면 첫 번째로 검색된 요소의 인덱스를 반환한다.
//존재하지 않으면 -1을 반환한다.

const arr = [1, 2, 2, 3];

arr.indexOf(2); // 1
arr.indexOf(4); // -1
arr.indexOf(2, 2); // 두번째 인덱스는 검색을 시작할 인덱스이다. , 2

//ES7에서 도입된 Array.prototype.includes 메서드를 사용하면 가독성이 좋다.

const foods = ['apple', 'banana', 'orange'];

if (!foods.includes('orange')) {
  foods.push('orange');
}

console.log(foods); // ['apple', 'banana', 'orange']

//3.Array.prototype.push
//인수로 전달받은 모든 값을 원본 배열의 마지막 요소로 추가 , 변경된 length프로퍼티 값을 반환한다.
//원본 배열을 직접 변경한다.

const arr2 = [1, 2];

let result = arr2.push(3, 4);
console.log(result); // 4
console.log(arr2); // [1,2,3,4]

// ES6의 스프레드 문법을 사용해 원본배열을 바꾸는것을 방지할 수 있다.
const arr3 = [1, 2];
const newArr = [...arr3, 3];
console.log(newArr); // [1,2,3]

//4.Array.prototype.pop
//원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환한다.
//원본 배열을 직접 변경한다.

const arr4 = [1, 2];
let result2 = arr4.pop();
console.log(result2); // 2
console.log(arr4); // [1]

//스택은 데이터를 마지막에 밀어넣고 마지막에 밀어 넣은 데이터를 먼저 꺼내는 후입 선출(LIFO) 자료구조이다.
//push() 와 pop()으로 구현
