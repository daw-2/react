import { useState } from 'react';

function TodoForm() {
  const [show, setShow] = useState(false);

  if (!show) {
    return <button onClick={() => setShow(true)}>Ajouter</button>;
  }

  return (
    <>
      <form>
        <input type="text" />
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
