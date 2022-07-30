//  심벌 값으로 프로퍼티 키를 생성
const obj = {
  [Symbol.for('mySymbol')]: 1,
};

obj[Symbol.for('mySymbol')]; // 1

// 심벌 값을 프로퍼티 키로 사용하여 프로퍼티를 생성하면 외부에 노출할 필요가 없는 프로퍼티를 은닉할 수 있다.
// for...in문 등으로 프로퍼티 키를 조회할 수 없다.

// 하지만 ES6에서 도입된 Object.getOwnPropertySymbols를 사용하면 조회할 수 있다.
const obj2 = {
  [Symbol.for('mySymbol2')]: 1,
};

// Symbol 프로퍼티 키를 배열로 반환한다.
console.log(Object.getOwnPropertySymbols(obj2)); // [ Symbol(mySymbol2) ]

// getOwnPropertySymbols 메서드로 심벌 값도 찾을 수 있다.
const symbolKey1 = Object.getOwnPropertySymbols(obj2)[0];
console.log(obj2[symbolKey1]); // 1
