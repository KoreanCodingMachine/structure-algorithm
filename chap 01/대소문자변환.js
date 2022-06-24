// 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로
// 변환하여 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.

// ▣ 입력예제 1
// StuDY
// ▣ 출력예제 1
// sTUdy

//아스키코드 알파벳 A -> 65 Z -> 90 a->98 z->122

//풀이 1 아스키코드로 풀이방식
function solution(s) {
  let answer = '';
  for (let x of s) {
    let num = x.charCodeAt(x); // ASCII 코드로 바꾼후
    //대문자라면
    if (num <= 90) {
      answer += x.toLowerCase();
    } //소문자라면
    else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

//풀이 2 단순 비교

function solution(s) {
  let answer = '';
  for (let x of s) {
    if (x === x.toUpperCase) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

// function solution(s) {
//   let answer = '';
//   for (let x of s) {
//     if (x === x.toUpperCase(x)) answer += x.toLowerCase();
//     else answer += x.toUpperCase();
//   }

//   return answer;
// }

console.log(solution('StuDY'));
