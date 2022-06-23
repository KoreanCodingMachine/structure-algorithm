// String.prototype.startsWith;
// 인수로 전달받은 문자열로 시작하는지 확인하여 그 결과를 true or false

const str = 'Hello world';
str.startsWith('He'); // true
str.startsWith('x'); // false

//2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
str.startsWith(' ', 5); // true
