// 배열의 생성방식
// 1.배열 리터럴
// 2.Array 생성자 함수
// 3.Array.of
// 4.Array.from

//1.배열 리터럴

const arr = [1, 2, 3];
console.log(arr.length); // 3

const arr2 = [1, , 3]; // 희소배열

//2.생성자 함수
const arr3 = new Array(10); // length값이 10인 배열 생성 , 희소배열
new Array(); // 빈 배열을 생성

// 전달된 인수가 2개 이상 혹은 숫자가 아닌 경우 인수를 요소로 갖는 배열을 생성한다.
new Array(1, 2, 3); // [1,2,3]
new Array({}); // [{}]

//일반 함수로서 호출해도 배열을 생성하는 생성자 함수로 동작한다.
//Array 생성자 함수 내부에서 new.target을 확인하기 때문이다.

Array(1, 2, 3); // [1,2,3]

//3.Array.of
//전달된 인수를 요소로 갖는 배열을 생성한다.

Array.of(1); // [1]

//4.Array.from
//유사 배열 객체 혹은 이터러블 객체를 인수로 전달받아 배열로 변환하여 반환한다.

Array.from({ length: 2, 0: 'a', 1: 'b' }); // [a,b]
Array.from('Hello'); // ['H','e','l','l','o']
