import { useState } from 'react';

function TodoForm({ onNew }) {
  const [show, setShow] = useState(false);
  const [newTodo, setNewTodo] = useState({ name: '' });

  const handleForm = (event) => {
    event.preventDefault();

    onNew(newTodo); // On dit au parent qu'il y a une nouvelle todo
    setNewTodo({ name: '' });
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
