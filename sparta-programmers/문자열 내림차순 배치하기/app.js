// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수,
// solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

function solution(s) {
  let answer = s
    .split('')
    .sort((a, b) => {
      // 크면 a가 b보다 앞에 위치하겠다.
      if (a > b) return -1;
      // 작으면 b가 a보다 앞에 위치하겠다.
      if (a < b) return 1;
      // 같을때
      if (a === b) return 0;
    })
    .join('');
  return answer;
}
