// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요?
// 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

/*
접근 방식
1. 2016년의 월의 마지막 일을 month배열에 넣어둔다.
2. date 즉 월의 마지막달에 해당하는 날이 무슨 요일인지 넣는다.



*/
function solution1(a, b) {
  return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
}

function solution2(a, b) {
  let answer = '';
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];
  let sum = 0;
  for (let i = 1; i < a; i++) {
    sum += month[i - 1];
  }
  answer = date[(sum + b - 1) % 7];
  return answer;
}

console.log(solution1(5, 24));
console.log(solution2(5, 24));
