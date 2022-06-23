// Array.prototype.sort;
// 기본적으로 오름차순으로 요소를 정렬한다.
// 원본 배열을 직접 변경한다.

const fruits = ['Banana', 'Orange', 'Apple'];
fruits.sort();
console.log(fruits); // ['Apple','Banana','Orange']

// 내림차순으로 정렬 하기
fruits.reverse();
console.log(fruits); // [ 'Orange', 'Banana', 'Apple' ]

// 숫자요소를 정렬할 때는 sort 메서드에 정렬 순서를 정의하는 비교 함수를 인수로 전달
// 비교 함수의 반환값이 0보다 작으면 비교 함수의 첫 번째 인수를 우선하여 정렬
// 0이면 정렬하지 않고
// 0보다 크면 두번째 인수를 우선하여 정렬

const points = [40, 100, 1, 5, 2, 25, 10];

points.sort((a, b) => a - b); // 오름차순 정렬
console.log(points);

points.sort((a, b) => b - a); // 내림차순 정렬
console.log(points);
