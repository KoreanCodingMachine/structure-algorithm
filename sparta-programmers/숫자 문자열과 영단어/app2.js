const str = 'abcd efg';

let a = str.split(1);
console.log(a);

let b = str.split('a');
console.log(b);
console.log(b[0]);
console.log(b[1]);

// split을 하면 잘린 배열과 나머지 배열이 반환된다.

console.log(['', '4seveneight'].join(1));
console.log(['', '4seveneight'].join(2));
console.log(['', '4seveneight'].join(3));
console.log(['', '4seveneight'].join(4));
