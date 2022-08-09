// 객체 디스트럭처링 할당

const user = { firstName: 'Ungmo', lastName: 'Lee' };

// 순서가 아닌 프로퍼티 키를 기준으로 디스트럭처링 할당이 이루어진다.
// 아래 구문을 해석해보면 lastName의 키 값을 ln을 할당했고
//  firstName의 키 값을 fn으로 할당했다.

const { lastName: ln, firstName: fn } = user;

// 객체 디스트럭처링 할당은 객체에서 프로퍼티 키로 필요한 프로퍼티 값만 추출하여 변수에 할당
const str = 'Hello';
// 문자열의 프로퍼티값인 legnth프로퍼티를(키) 변수 이름을 lengthss로 저장하겠다.
const { length: lengthss } = str;
console.log(lengthss); // 5

const todo = { id: 1, content: 'HTML', completed: true };
// todo에 있는 id라는 key를 조회할건데 id라는 변수에 담아서 조회한다.
// key와 조회할 변수가 같기 때문에 생략 가능함
const { id: id } = todo;
console.log(id); // 1
