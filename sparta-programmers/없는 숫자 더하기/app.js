// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (numbers.indexOf(i) === -1) {
      answer += i;
    }
  }

  return answer;
}
console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

// 다른사람의 풀이
// 0부터 9까지의 최종합을 구한뒤 numbers에 reduce함수를 사용하여 더한 값을 뺀다.

function solution2(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
