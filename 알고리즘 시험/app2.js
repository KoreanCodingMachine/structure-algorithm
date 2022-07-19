// 기원이는 오늘 항해99를 시작했다. 성격이 급한 기원이는 항해 1일 차부터 언제 수료를 하게될 지 궁금하다.
// 항해 1일 차 날짜를 입력하면 98일 이후 항해를 수료하게 되는 날짜를 계산해주는 알고리즘을 만들어보자.
// 제한 조건
// 1 ≤ month ≤ 12
// 1 ≤ day ≤ 31 (2월은 28일로 고정합니다, 즉 윤일은 고려하지 않습니다.)

function solution(month, day) {
  let result = '';
  let now = new Date(`2022-${month}-${day}`);
  result = new Date(now.setDate(now.getDate() + 98));
  //   console.log(now);
  //   console.log(result);
  //   console.log(typeof result);
  let months = result.getMonth() + 1;
  let days = result.getDate();
  console.log(months);
  console.log(days);

  result = `${months}월 ${days}일`;
  console.log(result);
  return result;
}
console.log(solution(1, 18));
