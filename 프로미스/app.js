const promise = new Promise((resolve, reject) => {
  if ('비동기 처리 성공') {
    resolve('result');
  } else {
    reject('failure reaseion');
  }
});

//  fulfilleds
new Promise((resolve) => resolve('fulfilled')).then(
  (v) => console.log(v),
  (e) => console.log(e)
);

//  rejected

new Promise((_, reject) => reject(new Error('rejected'))).then(
  (v) => console.log(v),
  (e) => console.log(e)
);
