// String.prototype.substring;
// 첫 번째 인수로 전달받은 인덱스에 위치하는 문자부터
// 두 번째 인수로 전달받은 인덱스에 위치하는 문자의 바로 이전 문자까지의 부분 문자열을 반환한다.

const str = 'Hello world';
str.substring(1, 4); // ell 인덱스 1부터 4 이전까지 (3)

// 두 번째 인수는 생략할 수 있다.
// 첫 번째 인수로 전달한 인덱스에 위치하는 문자부터 마지막 문자까지 부분 문자열을 반환한다.

str.substring(1); // 'ello world'

//특이 케이스
//1. 첫 번째 인수 > 두 번째 인수인 경우 두 인수는 교환된다.
str.substring(4, 1); // === str.substring(1,4)  ell

//2.인수 < 0 또는 NaN인 경우 0으로 취급된다.
str.substring(-2); // 'Hello world'

//3.인수 > 문자열의 길이인 경우 인수는 문자열의 길이로 취급된다.
str.substring(1, 100); // 'ello world'

//응용 with indexOf
str.substring(0, str.indexOf(' ')); // 'Hello'
str.substring(str.indexOf(' ') + 1, str.length); // 'World'
