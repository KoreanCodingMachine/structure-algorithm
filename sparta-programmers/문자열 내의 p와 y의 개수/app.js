// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True,
// 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
//  단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

function solution(s) {
  let answer = true;
  let num1 = 0;
  let num2 = 0;
  let arr = s.split('');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes('p') || arr[i].includes('P')) num1++;
    if (arr[i].includes('y') || arr[i].includes('Y')) num2++;
  }

  if (num1 === num2) answer = true;
  else answer = false;

  return answer;
}

console.log(solution('pPoooyY'));

// 다른 사람의 풀이
// 모두 대문자로 바꿔보리고 split으로 자른 배열의 길이가 같은지 검사한다.
function numPY(s) {
  //함수를 완성하세요
  return (
    s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length
  );
}
