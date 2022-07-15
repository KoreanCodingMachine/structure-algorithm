// 수많은 마라톤 선수들이 마라톤에 참여하였습니다.
// 단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
// 마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
// 완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

//  participant 문자열 배열 중에서
//  completion 문자열 배열에 없는 요소를 찾아서 return한다.

function solution(participant, completion) {
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
