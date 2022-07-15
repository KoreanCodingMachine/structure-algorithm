// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수,
// solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

function solution(arr, divisor) {
  let new_array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      new_array.push(arr[i]);
    }
  }

  if (new_array.length === 0) {
    new_array = [-1];
  }
  new_array.sort((a, b) => {
    return a - b;
  });

  return new_array;
}

console.log(solution([5, 9, 7, 10], 5));
