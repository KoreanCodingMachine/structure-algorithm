// 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후,
// 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(n) {
  // 문자열로 바꾸어서 배열에 저장하고 역순으로 뒤집고 다시 문자열로 바꾼다.
  let answer = n.toString(3).split('').reverse().join('');
  // 바뀐 문자열을 10진법으로 바꾼다.
  return parseInt(answer, 3);
}

console.log(solution(3));
console.log(solution(45));
