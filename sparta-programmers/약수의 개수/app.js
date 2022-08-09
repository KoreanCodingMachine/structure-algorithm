// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
// 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 풀이1.함수를 나누어서 구하는 방식
// 약수의 개수를 구하는 함수
function divisor(num) {
  let count = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count % 2 === 0) {
    return num;
  } else {
    return -num;
  }
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer += divisor(i);
  }
  return answer;
}

console.log(solution(24, 27));

//풀이2. Math.sqrt를 구하는 방식
// Math.sqrt 즉 제곱근의 값이 정수이면 그 값의 약수의 개수는 홀수이다.

function solution2(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer += Number.isInteger(Math.sqrt(i)) ? i : -i;
  }
  return answer;
}

console.log(solution(24, 27));
