// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요.
// 예를들어 n이 118372면 873211을 리턴하면 됩니다.

function solution(n) {
  let answer = 0;
  let new_array = [];
  answer = n.toString().split('');

  for (let i = 0; i < answer.length; i++) {
    new_array.push(Number(answer[i]));
  }

  answer = Number(
    new_array
      .sort((a, b) => {
        return b - a;
      })
      .join('')
  );

  return answer;
}

console.log(solution(118372));
