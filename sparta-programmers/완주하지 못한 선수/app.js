// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

//  participant 문자열 배열 중에서
//  completion 문자열 배열에 없는 요소를 찾아서 return한다.

function solution1(participant, completion) {
  participant.sort(); //참가자 배열 정렬
  completion.sort(); //완주자 배열 정렬
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      //인덱스 0부터 순차적으로 두 배열 비교
      return participant[i];
      //비완주자가 참가자 배열에 나올 경우 출력
    }
  }
}

function solution2(participant, completion) {
  let answer = '';

  for (let i = 0; i < participant.length; i++) {
    for (let j = 0; j < completion.length; j++) {
      // 참가자의 인덱스와 완주자의 인덱스가 같다면
      if (participant[i] === completion[j]) {
        participant[i] = null;
        completion[j] = null; // -> 이 코드가 3번 테스트케이스가 안나온 이유이다. 좀 더 고민해보자 아.. 한번 완주하면 없어져야 하는데.. 젠장
        // 즉 동일인물이면 이걸 completion 배열에도 2명이 있어야 하는데
        break;
      }
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== null) {
      answer = participant[i];
      break;
    }
  }

  return answer;
}

console.log(solution2(['leo', 'kiki', 'eden'], ['eden', 'kiki']));
console.log(
  solution2(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
);
console.log(
  solution2(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
);
