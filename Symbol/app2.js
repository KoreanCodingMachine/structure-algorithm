//Symbol.for , Symbol.keyFor 메서드

//1.Symbol.for 메서드

// 전역 심벌 레지스트리에서 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 새성
const s1 = Symbol.for('mySymbol');

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 있으면 해당 심벌 값을 반환
const s2 = Symbol.for('mySymbol');

console.log(s1 === s2);

// Symbol.keyFor 메서드
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출할 수 있다.

// 전역 심벌 레지스트리에 mySymbol이라는 키로 저장된 심벌 값이 없으면 새로운 심벌 값을 생성
const s3 = Symbol.for('mySymbol');
// 전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s3); // mySymbol

//  Symbol 함수를 호출하여 생성한 심벌 값은 전역 심벌 레지스트리에 등록되어 관리되지 않는다.
const s4 = Symbol('foo');
//  전역 심벌 레지스트리에 저장된 심벌 값의 키를 추출
Symbol.keyFor(s4); // undefined
