// 최솟값 구하기
// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 7개의 수가 주어진다.
// ▣ 출력설명
// 첫 번째 줄에 가장 작은 값을 출력한다.

// ▣ 입력예제 1
// 5 3 7 11 2 15 17
// ▣ 출력예제 1
// 2

// 나의 풀이
// function solution(arr) {
//   let answer;

//   let new_array = arr.sort((a, b) => {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] > arr[i + 1]) {
//         return a - b;
//       }
//     }
//   });
//   answer = new_array[0];

//   return answer;
// }

// let arr = [5, 7, 1, 3, 2, 9, 11];
// console.log(solution(arr));

// 강의 에서 풀이 1

function solution(arr) {
  let answer;

  return answer;
}

console.log(solution([5, 7, 1, 3, 2, 9, 11]));

// function solution(arr) {
//   let answer,
//     min = Number.MAX_SAFE_INTEGER; // 최소값을 구할때 큰 숫자로 초기화
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   answer = min;
//   return answer;
// }

// console.log(solution([5, 7, 1, 3, 2, 9, 11]));

//강의에서 풀이 2
// Math 객체를 활용함

function solution(arr) {
  let min = Math.min(...arr);
  let min2 = Math.min.apply(null, arr); // 전개연산자를 사용하지 않고 사용하는 방법
  let max = Math.max(...arr);

  console.log(min2);
  console.log(max);

  answer = min;
  return answer;
}

console.log(solution([5, 7, 1, 3, 2, 9, 11]));
