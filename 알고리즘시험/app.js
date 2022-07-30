// 자연수 n의 각 자리 숫자를 뒤집은 순서로 더해 출력하는 수식을 리턴해주세요.
// 예를들어 n이 12345이면 "5+4+3+2+1=15" 라는 문자열을 리턴합니다.

// 오디오 소리가 안나서 주석으로 설명하겠습니다.

/*
문제 풀이 방법
1.정수로 입력받은 숫자를 toString()메서드를 이용해서 문자열로바꾸고 그걸 단어별로 배열에 잘라 담슴니다.
2.배열에 잘라담은 각 문자열 각각을 숫자로 치환해서(Number) 총 합을 count라는 변수에 저장해두고
3.결과값에 맞게 출력하기 위해서 내림차순으로 문자열 배열을 정렬하고 +를 이용해서 연결해줍니다.
4.출력값에는 문자열에 없는 = 과 count가 있어야 함으로 출력값에 맞게 result에 값을 저장해줍니다.
*/

function solution(n) {
  let result = '';
  let count = 0;
  let sum = n.toString().split('');

  for (let i = 0; i < sum.length; i++) {
    count += Number(sum[i]);
  }

  let new_arr = sum
    .sort((a, b) => {
      return b - a;
    })
    .join('+');

  result = new_arr + '=' + +`${count}`;
  return result;
}
console.log(solution(718253));
