// String.prototype.endsWith
// 대상 문자열이 인수로 전달받은 문자열로 끝나는지 확인하여 그 결과를 true or false

const str = 'Hello world';
str.endsWith('ld'); // true
str.endsWith('x'); // false

//2번째 인수로 검색할 문자열의 길이를 전달할 수 있다.
str.endsWith('lo', 5); // true 처음부터 5자리까지('Hello')가 'lo'로 끝나느지 확인
