import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store';

function TodoForm({ onNew }) {
  const [show, setShow] = useState(false);
  const [newTodo, setNewTodo] = useState({ name: '', done: false });
  const dispatch = useDispatch();

  const handleForm = (event) => {
    event.preventDefault();

    newTodo.id = Math.random();
    onNew(newTodo); // On dit au parent qu'il y a une nouvelle todo
    dispatch(add(newTodo)); // Avec Redux
    setNewTodo({ name: '', done: false });
    setShow(false);
    // setTodos((todos) => [ ...todos, newTodo ]);
  }

  if (!show) {
    return <button onClick={() => setShow(true)}>Ajouter</button>;
  }

  return (
    <>
      <form onSubmit={(e) => handleForm(e)}>
        <input type="text" value={newTodo.name} onChange={(e) => setNewTodo({ name: e.target.value })} />
        <div className="grid">
          <button className="secondary" type="button"
            onClick={() => setShow(false)}
          >
            Annuler
          </button>
          <button>Ajouter</button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
