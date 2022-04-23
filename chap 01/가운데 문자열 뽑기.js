// 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세
// 요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

// ▣ 입력설명
// 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
// ▣ 출력설명
// 첫 줄에 가운데 문자를 출력합니다.

// ▣ 입력예제 1
// study
// ▣ 출력예제 1
// u

// ▣ 입력예제 2
// good
// ▣ 출력예제 2
// oo

// substr() -> substr() 함수는, 파라미터로 입력받은 start index부터 length 길이만큼 string을 잘라내어 반환하는 함수입니다..
// string.substr(start, length)

// substring()함수는 substr() 함수와 같이 특정 문자열을 잘라내여 반환합니다.
// substr() 함수와 다른 점은 매개변수로 잘라내고 싶은 문자열의 start index와 last index를 전달
// string.substring(start, end)

// const str = '안녕하세요';
// console.log(str.substr(0, 3)); // 안녕하
// console.log(str.substring(0, 3)); // 안녕하  slice() 와 비슷하게 동작

function solution(s) {
  let answer;
  let mid = parseInt(s.length / 2);
  if (s.length % 2 === 1) {
    answer = s.substr(mid, 1);
  } else {
    answer = s.substr(mid - 1, 2);
  }
  return answer;
}

console.log(solution('good'));
