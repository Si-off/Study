import React, { useRef, useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

interface todoType {
  id: string;
  content: string;
}

const todoList = atom<todoType[]>({
  key: 'todoListState',
  default: [],
});

const todoListSelector = selector<todoType[]>({
  key: 'todoListSelector',
  get: ({ get }) => {
    const todos = get(todoList);
    const results = todos.filter((todo) => {
      return todo.content.includes('learn');
    });

    return results;
  },
});

function App() {
  const [todos, setTodos] = useRecoilState<todoType[]>(todoList);
  const filteredTodos = useRecoilValue<todoType[]>(todoListSelector);
  const [isFiltered, setisFiltered] = useState(false);

  const refInput = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const enteredText = refInput.current!.value;
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), content: enteredText }]);

    refInput.current!.value = '';
  };

  const deleteTodo = (todoID: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoID));
  };

  return (
    <div className='App'>
      <input type='text' ref={refInput} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {!isFiltered &&
          todos.map((todo) => (
            <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
              {todo.content}
            </li>
          ))}

        {isFiltered &&
          filteredTodos.map((todo) => (
            <li key={todo.id} onClick={() => deleteTodo(todo.id)}>
              {todo.content}
            </li>
          ))}
      </ul>
      <div>
        <input type='checkbox' onChange={() => setisFiltered((prev) => !prev)} />
        filter
      </div>
    </div>
  );
}

export default App;
