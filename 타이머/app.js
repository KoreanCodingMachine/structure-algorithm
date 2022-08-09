/*
자바 스크립트 엔진은 단 하나의 실행 컨텍스트 스택을 갖기 때문에 두 가지 이상의 태스크를 동시에 실행할 수 없다.
즉 싱글 스레드로 동작한다. 
setTimeout,setInterval은 비동기 처리방식으로 동작한다. 
*/

// setTimeout(() => {
//   console.log('hi');
// }, 1000);

//  setTimeout 함수가 반환한 타이머 id를 clearTimeout 함수의 인수로 전달하여 타이머를 취소한다.
//  타이머가 취소되면 setTImeout 함수의 콜백 함수가 실행되지 않는다.
const timerId = setTimeout(
  (name) => {
    console.log(`Hi! ${name}`);
  },
  1000,
  'Lee'
);

clearTimeout(timerId);
