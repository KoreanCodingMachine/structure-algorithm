function solution(sizes) {
  let answer = 0;
  let max = [];
  let min = [];

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      let temp = sizes[i][1];
      sizes[i][1] = sizes[i][0];
      sizes[i][0] = temp;
    }
    max.push(sizes[i][0]);
    min.push(sizes[i][1]);
  }

  let num1 = Math.max(...max);
  let num2 = Math.max(...min);
  result = num1 * num2;
  console.log(result);
  return (answer = result);
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
