// String.prototype.split;
// 첫 번째 인수로 전달한 문자열 또는 정규 표현식을 검색하여
// 문자열을 구분한 후 분리된 각 문자열로 이루어진 배열을 반환한다.

const str = 'How are you doing?';
console.log(str.split(' ')); // [ 'How', 'are', 'you', 'doing?' ]
console.log(str.split(''));
// [
//     'H', 'o', 'w', ' ', 'a',
//     'r', 'e', ' ', 'y', 'o',
//     'u', ' ', 'd', 'o', 'i',
//     'n', 'g', '?'
// ]
console.log(str.split()); // [ 'How are you doing?' ] 인수를 생략하면 대상 문자열 전체를 단일 요소로 하는 배열을 반환한다.

// 두 번째 인수로 배열의 길이를 지정할 수 있다.
console.log(str.split(' ', 3)); // [ 'How', 'are', 'you' ]
console.log(str.split('a')); // [ 'How ', 're you doing?' ]
console.log(str.split('o')); // [ 'H', 'w are y', 'u d', 'ing?' ]
