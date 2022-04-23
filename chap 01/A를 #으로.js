// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
// 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 문자열이 입력된다.
// ▣ 출력설명
// 첫 번째 줄에 바뀐 단어를 출력한다.
// ▣ 입력예제 1
// BANANA
// ▣ 출력예제 1
// B#N#N#

// function solution(str) {
//   let answer = str.replaceAll('A', '#');
//   return answer;
// }

// console.log(solution('BANANA'));

// function solution(s) {
//   let answer = '';
//   for (let x of s) {
//     if (x === 'A') {
//       answer += '#';
//     } else answer += x;
//   }
//   return answer;
// }

// console.log(solution('BANANA'));

// 스트링은 값이 복사되는것이다. , 배열 .객체 처럼 주소참조가 아니다.
function solution(s) {
  let answer = s;
  answer = answer.replace(/A/g, '#');
  return answer;
}

console.log(solution('BANANA'));
