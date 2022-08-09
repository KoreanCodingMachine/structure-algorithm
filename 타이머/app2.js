/*
setInterval 함수는 두 번째 인수로 전달 받은 시간으로 반복동작하는 타이머를 생성한다. 
이후 타이머가 만료될 때마다 첫 번째 인수로 전달받은 콜백함수가 반복 호출된다.
*/

let count = 1;

const timeoutId = setInterval(() => {
  console.log(count);

  if (count++ === 5) clearInterval(timeoutId);
}, 2000);
