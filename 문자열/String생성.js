//String객체는 생성자 함수 객체다.
//new연산자와 함께 호출하여 String 인스턴스를 생성할 수 있다.

const strObj = new String();
console.log(strObj); // [String: '']

//String 생성자 함수의 인수로 문자열을 전달하면서 new 연산자와 함꼐 호출하면
//인수로 전달받은 문자열을 할당한 String 래퍼 객체를 생성한다.

const strObj2 = new String('Lee');
console.log(strObj2); // [String: 'Lee']

//length 프로퍼티는 문자열의 문자 개수를 반환한다.
'Hello'.length; // 5

//String 메서드
//문자열은 변경 불가능한 원시 값이기 때문에 String 래퍼 객체도 읽기 전용 객체로 제공된다.
//원본을 직접 변경하는 메서드는 없다.
