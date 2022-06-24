// 중복문자제거
// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하
// 세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력됩니다.
// ▣ 출력설명
// 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

// ▣ 입력예제 1
// ksekkset
// ▣ 출력예제 1
// kset

//string.indexOf(searchvalue,position)
//첫번째 해당하는 인덱스만 반환한다. 없으면 -1을 반환한다.
//position속성을 이용해 시작 인덱스를 정할수 있다.

//문자열이기 때문에 filter 메서드를 사용할 수 없다. 햇갈리지 말것

function solution(s) {
  let answer = '';
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }
  return answer;
}

console.log(solution('ksekkset'));

// 특정문자 찾기
// k의 개수는?

// function solution(s) {
//   let answer = 0;

//   return answer;
// }

// function solution(s) {
//   let answer = 0;
//   let pos = s.indexOf('k');
//   while (pos !== -1) {
//     answer++;
//     pos = s.indexOf('k', pos + 1);
//   }
// }
// console.log(solution('ksekkset'));
