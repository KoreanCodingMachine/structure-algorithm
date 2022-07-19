function solution(lottos, win_nums) {
  let answer = [];
  let zero_count = 0;
  let true_count = 0;
  const rank = [6, 6, 5, 4, 3, 2, 1];

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zero_count++;
    }
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        true_count++;
      }
    }
  }

  console.log(zero_count);
  console.log(true_count);

  answer.push(rank[true_count + zero_count], rank[true_count]);
  console.log(answer);
  return answer;
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]);
solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]);
solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]);
