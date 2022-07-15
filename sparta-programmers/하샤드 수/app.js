// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
// 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

/*

접근방식
자릿수의 합을 구하고  -> 문자열로 바꾸어서 각 인덱스를 계산하고 그 값을 Number을 이용해서 숫자로 변환
원래의 숫자와 자릿수의 합이 나누어 떨어진다 -> true
아니면 -> false
*/

function solution(x) {
  let num = x.toString();
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += Number(num[i]);
  }

  if (x % sum === 0) {
    return true;
  } else {
    return false;
  }
}
