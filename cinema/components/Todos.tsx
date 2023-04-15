import React from 'react';
import { Todo } from '@/interfaces/todo.module';

interface Props extends Todo {}

const Todos = ({ items }: Props) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
