// 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때,
// 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다.
// 예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면
// 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.

// split() 문자열을 배열로
// join() 배열을 문자열로

function solution(strings, n) {
  let answer = strings.sort((a, b) => {
    // 사전순으로 큰 순서면 뒤로 정렬하겠다.
    if (a[n] > b[n]) return 1;
    // 사전순으로 작은 숫자면 앞에 정렬하겠다.
    if (a[n] < b[n]) return -1;
    // 두 숫자가 같을 경우
    if (a[n] === b[n]) {
      // 사전순으로 큰 수면 뒤로 정렬하겠다.
      if (a > b) return 1;
      // 사전순으로 작은수면 앞에 정렬하겠다.
      if (a < b) return -1;
      //   같을 경우
      return 0;
    }
  });
  return answer;
}

console.log(solution(['sun', 'bed', 'car'], 1));
solution(['abce', 'abcd', 'cdx'], 2);

const arr = ['kiwi', 'apple', 'melon', 'grape', 'banana'];

arr.sort(function (a, b) {
  if (a > b) return 1;
  if (b > a) return -1;
  else return 0;
});
console.log(arr);

/*

1.알파벳의 경우 뒤에 오는 문자 (a, c 중에서 알파벳 순서상 c가 뒤에오는 문자)가 앞에 있는 문자보다
큰 수이다.

2.소문자가 대문자보다 비교연산에서 더 큰수이다.

*/

const str1 = 'a';
const str2 = 'b';
const str3 = 'A';

console.log(str1 > str2); // false
console.log(str2 > str1); // true
console.log(str1 > str3); // true
