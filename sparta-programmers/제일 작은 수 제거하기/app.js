// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

/*
문제 접근 방식

배열 중 가장 작은 수를 제거한 배열을 리턴한다. 
->배열의 indexOf 메서드를 활용해서 제일 작은수를 제거한다. 
->splice(제일 작은수,1) ==> 제일 작은수 1개를 자르겠다.
*/

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) {
    return [-1];
  }

  return arr;
}

console.log(solution([4, 3, 2, 1]));
console.log(solution([10]));
