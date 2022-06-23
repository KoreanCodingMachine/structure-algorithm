// String.prototype.replace;
// 첫 번째 인수로 전달받은 문자열 또는 정규표현식을 검색하여
// 두 번째 인수로 전달한 문자열로 치환한 문자열을 반환한다.

const str = 'Hello world';
str.replace('world', 'Lee'); // 'Hello Lee'

//검색된 문자열이 여럿 존재할 경우 첫 번째로 검색된 문자열만 치환한다.
const str2 = 'Hello world world';
str2.replace('world', 'Lee'); // 'Hello Lee world'
