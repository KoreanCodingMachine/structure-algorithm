const mySymbol = Symbol();
console.log(typeof mySymbol); // symbol 타입

// 심벌 값은 외부로 노출되지 않아 확인할 수 없다.
console.log(mySymbol); //Symbol()

// 심벌 값에 대한 설명이 같더라도 유일무이한 심벌 값을 생성한다.
// 내부 문자열은 디버깅 용도로 사용된다.

const mySymbol1 = Symbol('mySymbol');
const mySymbol2 = Symbol('mySymbol');
console.log(mySymbol1 === mySymbol2); // false
