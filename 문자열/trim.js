// String.prototype.trim;
// 공백 문자가 있을 경우 이를 제거한 문자열을 반환한다.

const str = '   foo   ';
str.trim(); // 'foo'
str.trimStart(); // 'foo    '
str.trimEnd(); // '    foo'
