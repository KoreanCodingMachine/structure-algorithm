/*
제너레이터 -> 코드 블록의 실행을 일시 중지했다가 필요한 시점에 재개할 수 있는 특수한 함수
1.제너레이터 함수는 함수 호출자에게 함수 실행의 제어권을 양도할 수 있다.
2.제너레이터 함수는 함수 호출자와 함수의 상태를 주고 받을 수 있다.
3.제너레이터 함수를 호출하면 제너레이터 객체를 반환한다.
*/

function* getDecFunc() {
  yield 1;
  yield 2;
  yield 3;
}

const getExpFunc = function* () {
  yield 1;
};

// const obj = {
//     * genObjMethod()[
//         yield 1;
//     ]
// }

const generator = getDecFunc();
console.log(generator); // Object [Generator] {}
