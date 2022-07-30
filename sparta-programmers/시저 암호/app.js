// 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
// 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
//  문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

function solution(s, n) {
  let answer = '';
  let alpha = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer += ' ';
      continue;
    }
    if (s[i].charCodeAt() + n <= 122) {
      // z 이상을 넘어가지 않으면
      alpha = s[i].charCodeAt() + n;
      answer += String.fromCharCode(alpha);
    }
    // z 이상을 넘어가 버리면
    else {
      // 대문자 일때
      if (s[i] <= 90) {
        alpha = 'A'.charCodeAt() + n - 1;
        answer += String.fromCharCode(alpha);
      }

      // 소문자 일때
      else {
        alpha = 'a'.charCodeAt() + n - 1;
        answer += String.fromCharCode(alpha);
      }
    }
  }
  console.log(answer);
  return answer;
}

solution('AB', 1);
solution('a B z', 4);
