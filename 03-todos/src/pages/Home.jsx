import { useState } from 'react';
import Header from '../components/Header';

function Home() {
  const [todos, setTodos] = useState([
    { id: 1, name: 'Faire les courses', done: false },
    { id: 2, name: 'Travailler', done: true },
    { id: 3, name: 'Surveiller Fiorella', done: true }
  ]);

  return (
    <>
      <Header />
      FORM
      LIST
        TODO
    </>
  );
}

export default Home;
