// function printTodo(todo) {
//   console.log(
//     `할일 ${todo.content}는 ${todo.completed ? '완료' : '비완료'} 상태입니다`
//   );
// }

// printTodo({ id: 1, content: 'HTML', completed: 'true' });

// 객체 디슥트럭처링 할당은 객체를 인수로 전달받는 함수의 매개변수에 사용할 수 있따.
// 가독성 좋게

function printTodo({ content: content, completed: completed }) {
  console.log(`할일 ${content}는 ${completed ? '완료' : '비완료'} 상태입니다`);
}

printTodo({ id: 1, content: 'HTML', completed: 'true' });
