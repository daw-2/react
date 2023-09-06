import { useState } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';

function Home() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true }
  ]);

  return (
    <>
      <Header todos={todos} />
      FORM
      <TodoList todos={todos} />
    </>
  );
}

export default Home;