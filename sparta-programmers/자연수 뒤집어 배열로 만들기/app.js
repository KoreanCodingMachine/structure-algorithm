// 자연수 뒤집어 배열로 만들기

function solution(n) {
  const str = n.toString(); // 문자열로 바꾸고
  str.split(''); // 문자열로 바꾼걸 단어별로 나누고
  console.log(str); // 12345
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(Number(str[i]));
  }

  return result;
}

console.log(solution(12345));
