import React, { useEffect, useState } from "react";
import axios from "axios";

const SERVER_URL = "http://localhost:4000/todos";

function App() {
  const [todos, setTodos] = useState();

  /** fetch API */
  // const fetchData = () => {
  //   fetch(SERVER_URL)
  //     .then((res) => res.json())
  //     .then((data) => setTodos(data));
  // };

  /** axios */
  // const fetchData = () => {
  //   axios.get(SERVER_URL).then((res) => setTodos(res.data));
  // };

  const fetchData = async () => {
    const response = await axios.get(SERVER_URL);
    setTodos(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  /** fetch API */
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //   const content = e.target.content.value;
  //   const completed = e.target.completed.checked;

  //   fetch(SERVER_URL, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       content,
  //       completed,
  //     }),
  //   }).then(() => {
  //     fetchData();
  //   });
  // };

  /** axios & async await */
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    const completed = e.target.completed.checked;

    await axios.post(SERVER_URL, { content, completed });
    fetchData();
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <form onSubmit={onSubmitHandler}>
        <input name="content" />
        <input name="completed" type="checkbox" />
        <input type="submit" value="add todo" />
      </form>

      {todos?.map((todo) => (
        <div key={todo.id}>{todo.content}</div>
      ))}
    </div>
  );
}

export default App;
