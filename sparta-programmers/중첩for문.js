for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (j % 2 === 1) {
      console.log(i, j);
      break; // continue를 한다고 해서 위의 for문으로 가는게 아니고 밑에있는 다음 for문에서 다음으로 간다.
    }
  }
}
