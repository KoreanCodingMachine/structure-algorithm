// 배열의 요소가 객체인 경우 배열 디스트럭처링 할당과 객체 디스트럭처링 할당을 혼용할 수 있다.

const todos = [
  { id: 1, content: 'HTML', completed: true },
  { id: 2, content: 'CSS', completed: false },
  { id: 3, content: 'JS', completed: false },
];

const [, { id: id }] = todos;
console.log(id); // 2

// 중첩객체

const user = {
  name: 'Lee',
  address: {
    zipCode: '03068',
    city: 'Seoul',
  },
};

const { name } = user;
console.log(name); // Lee
const { address } = user;
console.log(address); // { zipCode: '03068', city: 'Seoul' }

//  address를 키 값으로 객체를 추출하고

const {
  address: { city: city2 },
} = user;
console.log(city2); // Seoul

//
const {
  address: { city },
} = user;

console.log(city); // Seoul
