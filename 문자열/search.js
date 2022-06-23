//String.prototype.search
//인수로 전달받은 정규 표현식과 매치하는 문자열을 검색하여 일치하는 문자열의 인덱스를 반환한다.
//검색에 실패하면 -1을 반환한다.

const str = 'Hello world';
str.search(/o/); // 4
str.search(/x/); // -1
