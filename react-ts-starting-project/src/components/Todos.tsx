interface Props {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const Todos = ({ items, onDeleteTodo }: Props) => {
  return (
    <ul>
      {items?.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={onDeleteTodo.bind(null, item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Todos;
