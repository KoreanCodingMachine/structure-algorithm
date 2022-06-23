//String.prototype.indexOf
//인수로 전달받은 문자열을 검색하여 첫 번째 인덱스를 반환한다. 검색에 실패하면 -1을 반환한다.
//대상 문자열에 특정 문자열이 존재하는지 확인할 때 유용하다.

const str = 'Hello World';

str.indexOf('l'); // 2 첫번째 인덱스 반환
str.indexOf('or'); // 7

//2번째 인수로 검색을 시작할 인덱스를 전달할 수 있다.
str.indexOf('l', 3); // 3

//String.prototype.includes 메서드를 사용하면 가독성이 더 좋다.
//결과를 true 또는 false로 반환한다.
if (str.includes('Hello')) {
}
