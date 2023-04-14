import { useState } from 'react';
import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos((prevTodo) => [...prevTodo, { id: Math.random().toString(), text: text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={todoAddHandler} />
      <Todos items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
