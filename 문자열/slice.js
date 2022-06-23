// String.prototype.slice
// substring 메서드와 동일하게 동작한다.
// 음수인 인수를 전달할 수 있다.
// 음수인 인수를 전달하면 대상 문자열의 가장 뒤에서부터 시작하여 문자열을 잘라내어 반환한다.

const str = 'hello world';
str.substring(0, 5); // 'hello'
str.slice(0, 5); // 'hello'

str.substring(-5); // 인수 < 0 또는 NaN인 경우 0으로 취급된다. 'hello world'
str.slice(-5); // 뒤에서 5자리를 잘라내어 반환한다. 'world'
