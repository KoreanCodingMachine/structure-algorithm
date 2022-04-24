// 5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합
// 니다.

// ▣ 입력설명
// 첫 줄에 자연수 N이 주어진다.(1<=N<=50)
// 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는
// 다.
// ▣ 출력설명
// 최대합을 출력합니다.

// ▣ 입력예제 1
// 5
// 10 13 10 12 15
// 12 39 30 23 11
// 11 25 50 53 15
// 19 27 29 37 27
// 19 13 30 13 19
// ▣ 출력예제 1
// 155

function solution(arr) {
  let answer;
  let result1 = [];
  let result2 = [];
  let result3 = [];
  let result4 = [];
  let num1 = 0,
    num2 = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum1 = 0,
      sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    result1.push(sum1);
    result2.push(sum2);
  }

  for (let i = 0; i < arr.length; i++) {
    let sum1 = 0,
      sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        sum1 += arr[i][j];
      }
      if (j === 4 - i) {
        sum2 += arr[i][j];
      }
    }
    result3.push(sum1);
    result4.push(sum2);
  }
  let result = result1.concat(result2);
  for (let x of result3) {
    num1 += x;
  }
  for (let x of result4) {
    num2 += x;
  }
  result1.push(num1);
  result1.push(num2);
  result1.push(...result2);

  let max = Math.max(...result1);
  answer = max;
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));
