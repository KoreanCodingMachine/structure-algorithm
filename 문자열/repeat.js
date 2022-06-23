// String.prototype.repeat;
// 대상 문자열을 인수로 전달받은 정수만큼 반복해 연결한 새로운 문자열을 반환한다.
// 인수로 전달받은 정수가 0이면 빈 문자열 반환한다
// 음수이면 RangeError를 발생시킨다.
// 인수를 생략하면 기본값은 0이다.

const str = 'abc';

str.repeat(); // ''
str.repeat(0); // ''
str.repeat(1); // 'abc'
str.repeat(2); // 'abcabc'
str.repeat(2.5); // 'abcabc'
str.repeat(-1); // RangeError
