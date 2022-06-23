// Array.prototype.splice
// 원본 배열의 중간에 요소를 추가하거나 중간에 있는 요소를 제거하는 경우
// 원본 배열을 직접 변경한다.

const arr = [1, 2, 3, 4];
const result = arr.splice(1, 2, 20, 30); // 원본 배열의 1번 인덱스부터 2개를 제거하고 그자리에 20,30을 삽입한다.
console.log(result); // [2,3]
console.log(arr); // [1,20,30,4]

const result2 = arr.splice(1); // 인덱스 1부터 모든 요소를 제거한다. [1]

//배열에서 특정요소를 제거할때 indexOf()를 사용하여 요소를 취득한다음 splice메서드를 사용한다.

const arr2 = [1, 2, 3, 1, 2];

function remove(array, item) {
  const index = array.indexOf(item); // 배열의 특정 요소를 취득한 다음
  if (index !== -1) array.splice(index, 1); // 제거할 아이템 요소가 있다면 제거한다.
  return array;
}

//filter 메서드를 사용하여 구현

const arr3 = [1, 2, 3, 1, 2];

function removeAll(array, item) {
  return array.filter((v) => v !== item);
}

// Array.prototype.slice
// 인수로 전달된 범위의 요소들을 복사하여 배열로 반환한다.
// 원본 배열은 변경되지 않는다.

const arr4 = [1, 2, 3];
arr4.slice(0, 1); // 0번째 인덱스부터 1번째 인덱스까지(미포함) 복사하여 반환한다. [1]
arr4.slice(1, 2); // 1번째 인덱스부터 2번째 인덱스까지(미포함) 복사하여 반환한다. [2]
console.log(arr4); // [1,2,3] 원본은 훼손되지 않는다.
arr4.slice(1); // 1번째 인덱스부터 이후의 모든 요소를 복사하여 반환한다. [2,3]

//slice 메서드를 활용하여 원본 배열의 복사본을 생성할 수 있다. 이때 얕은 복사를 통해 생성된다.
//얕은 복사 -> 배열 요소의 참조값은 같지만 변수의 참조값은 다르다.

const todos = [
  { id: 1, content: 'HTML', completed: 'false' },
  { id: 2, content: 'HTML', completed: 'false' },
  { id: 3, content: 'HTML', completed: 'false' },
];

const _todos = todos.slice(); // 이때 생성된 _todos 배열 요소의 참조값은 원본과 같지만 참조값은 다른 별개의 배열이다.
// const _todos = [...todos]
